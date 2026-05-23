"use client";

import { useVenomMode } from "@/hooks/use-venom-mode";
import { useEffect, useRef, useState } from "react";

const SPEED = 130;
const ROTATE_SMOOTHING = 9;
const ARRIVE_EPSILON = 1.5;
const IDLE_MIN_MS = 4500;
const IDLE_MAX_MS = 9000;
const BODY_PADDING = 36;
const WEB_LIFE_MS = 2200;
const ENTRANCE_DROP_MS = 1100;

type Phase = "entering" | "moving" | "idle";
type Web = { id: number; x1: number; y1: number; x2: number; y2: number };
type Thwip = { id: number; x: number; y: number };
type Pulse = { id: number; x: number; y: number };

let WEB_ID = 0;
let THWIP_ID = 0;
let PULSE_ID = 0;
const THWIP_LIFE_MS = 700;
const PULSE_LIFE_MS = 1400;
const PULSE_MIN_MS = 8000;
const PULSE_MAX_MS = 13000;

export function Spider() {
  const venom = useVenomMode();
  const spiderRef = useRef<SVGGElement>(null);
  const [webs, setWebs] = useState<Web[]>([]);
  const [thwips, setThwips] = useState<Thwip[]>([]);
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [entranceLine, setEntranceLine] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const startX = Math.max(BODY_PADDING, Math.min(w - BODY_PADDING, w * 0.72));
    const restY = Math.max(BODY_PADDING, Math.min(h - BODY_PADDING, h * 0.42));

    setEntranceLine({ x: startX, y: restY });

    const state = {
      x: startX,
      y: prefersReduced ? restY : -40,
      tx: startX,
      ty: restY,
      angle: Math.PI / 2,
      phase: (prefersReduced ? "idle" : "entering") as Phase,
      idleUntil: performance.now() + 1500,
      entranceStart: performance.now(),
    };

    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

    const onClick = (e: MouseEvent) => {
      if (state.phase === "entering") return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const tx = clamp(e.clientX, BODY_PADDING, W - BODY_PADDING);
      const ty = clamp(e.clientY, BODY_PADDING, H - BODY_PADDING);

      const id = ++WEB_ID;
      const web: Web = { id, x1: state.x, y1: state.y, x2: tx, y2: ty };
      setWebs((prev) => [...prev, web]);
      window.setTimeout(() => {
        setWebs((prev) => prev.filter((p) => p.id !== id));
      }, WEB_LIFE_MS);

      const tid = ++THWIP_ID;
      setThwips((prev) => [...prev, { id: tid, x: tx, y: ty }]);
      window.setTimeout(() => {
        setThwips((prev) => prev.filter((p) => p.id !== tid));
      }, THWIP_LIFE_MS);

      state.tx = tx;
      state.ty = ty;
      state.phase = "moving";
      state.idleUntil = performance.now() + 5000;
    };

    const onResize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      state.x = clamp(state.x, BODY_PADDING, W - BODY_PADDING);
      state.y = clamp(state.y, BODY_PADDING, H - BODY_PADDING);
      state.tx = clamp(state.tx, BODY_PADDING, W - BODY_PADDING);
      state.ty = clamp(state.ty, BODY_PADDING, H - BODY_PADDING);
    };

    window.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (state.phase === "entering") {
        const t = Math.min((now - state.entranceStart) / ENTRANCE_DROP_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        state.y = -40 + (restY + 40) * eased;
        state.angle = Math.PI / 2;
        if (t >= 1) {
          state.phase = "idle";
          state.idleUntil = now + 2200;
          setEntranceLine(null);
        }
      } else {
        const dx = state.tx - state.x;
        const dy = state.ty - state.y;
        const dist = Math.hypot(dx, dy);

        if (dist > ARRIVE_EPSILON) {
          const step = Math.min(SPEED * dt, dist);
          state.x += (dx / dist) * step;
          state.y += (dy / dist) * step;
          const targetAngle = Math.atan2(dy, dx);
          let diff = targetAngle - state.angle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          state.angle += diff * Math.min(dt * ROTATE_SMOOTHING, 1);
          state.phase = "moving";
        } else {
          state.phase = "idle";
          if (now > state.idleUntil) {
            const W = window.innerWidth;
            const H = window.innerHeight;
            state.tx = Math.random() * (W - BODY_PADDING * 2) + BODY_PADDING;
            state.ty = Math.random() * (H - BODY_PADDING * 2) + BODY_PADDING;
            state.idleUntil =
              now + IDLE_MIN_MS + Math.random() * (IDLE_MAX_MS - IDLE_MIN_MS);
          }
        }
      }

      if (spiderRef.current) {
        const deg = ((state.angle + Math.PI / 2) * 180) / Math.PI;
        spiderRef.current.setAttribute(
          "transform",
          `translate(${state.x.toFixed(2)} ${state.y.toFixed(2)}) rotate(${deg.toFixed(2)})`
        );
        spiderRef.current.dataset.moving = state.phase === "moving" ? "true" : "false";
      }

      raf = requestAnimationFrame(tick);
    };

    if (!prefersReduced) raf = requestAnimationFrame(tick);
    else if (spiderRef.current) {
      spiderRef.current.setAttribute("transform", `translate(${startX} ${restY}) rotate(180)`);
    }

    let pulseTimer = 0;
    const schedulePulse = () => {
      const wait = PULSE_MIN_MS + Math.random() * (PULSE_MAX_MS - PULSE_MIN_MS);
      pulseTimer = window.setTimeout(() => {
        if (state.phase === "idle") {
          const id = ++PULSE_ID;
          setPulses((prev) => [...prev, { id, x: state.x, y: state.y }]);
          window.setTimeout(() => {
            setPulses((prev) => prev.filter((p) => p.id !== id));
          }, PULSE_LIFE_MS);
        }
        schedulePulse();
      }, wait);
    };
    if (!prefersReduced) schedulePulse();

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(pulseTimer);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes spider-scurry-a {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(0, -0.5px) rotate(-3deg); }
        }
        @keyframes spider-scurry-b {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50%      { transform: translate(0, 0.5px) rotate(3deg); }
        }
        @keyframes spider-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-0.6px); }
        }
        @keyframes web-shoot {
          0%   { stroke-dashoffset: var(--web-len); opacity: 0.75; }
          22%  { stroke-dashoffset: 0; opacity: 0.75; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes entrance-fade {
          0%   { opacity: 0.55; }
          80%  { opacity: 0.55; }
          100% { opacity: 0; }
        }
        @keyframes pulse-out {
          0%   { r: 5;  opacity: 0.55; }
          100% { r: 42; opacity: 0;    }
        }
        .pulse-ring {
          animation: pulse-out ${PULSE_LIFE_MS}ms ease-out forwards;
        }
        .pulse-ring-2 {
          animation-delay: ${PULSE_LIFE_MS * 0.25}ms;
        }
        @keyframes thwip-pop {
          0%   { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          25%  { transform: scale(1.15) rotate(-4deg); opacity: 1; }
          70%  { transform: scale(1)    rotate(-2deg); opacity: 1; }
          100% { transform: scale(0.95) rotate(0deg);  opacity: 0; }
        }
        .thwip-burst {
          transform-origin: center;
          transform-box: fill-box;
          animation: thwip-pop ${THWIP_LIFE_MS}ms ease-out forwards;
        }

        .spider-svg .leg-a,
        .spider-svg .leg-b,
        .spider-svg .spider-body {
          transform-origin: center;
          transform-box: fill-box;
        }
        .spider-svg .spider-root[data-moving="true"] .leg-a {
          animation: spider-scurry-a 0.18s linear infinite;
        }
        .spider-svg .spider-root[data-moving="true"] .leg-b {
          animation: spider-scurry-b 0.18s linear infinite;
        }
        .spider-svg .spider-root[data-moving="true"] .spider-body {
          animation: spider-bob 0.18s linear infinite;
        }

        .spider-web {
          animation: web-shoot ${WEB_LIFE_MS}ms ease-out forwards;
        }
        .spider-entrance-line {
          animation: entrance-fade ${ENTRANCE_DROP_MS + 300}ms ease-out forwards;
        }
      `}</style>

      <svg
        aria-hidden
        className="spider-svg pointer-events-none fixed inset-0 z-[35] text-foreground/85 mix-blend-multiply dark:mix-blend-screen dark:text-foreground/75"
        width="100%"
        height="100%"
      >
        {entranceLine && (
          <line
            className="spider-entrance-line"
            x1={entranceLine.x}
            y1={0}
            x2={entranceLine.x}
            y2={entranceLine.y - 8}
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="2 3"
            strokeLinecap="round"
            opacity="0.55"
          />
        )}

        {pulses.map((p) => (
          <g key={p.id} transform={`translate(${p.x} ${p.y})`}>
            <circle
              className="pulse-ring"
              cx="0"
              cy="0"
              r="5"
              fill="none"
              stroke="hsl(var(--spidey-red))"
              strokeWidth="1.1"
              strokeDasharray="3 4"
              opacity="0"
            />
            <circle
              className="pulse-ring pulse-ring-2"
              cx="0"
              cy="0"
              r="5"
              fill="none"
              stroke="hsl(var(--spidey-red))"
              strokeWidth="0.7"
              strokeDasharray="1.5 3"
              opacity="0"
            />
          </g>
        ))}

        {thwips.map((t) => (
          <g key={t.id} className="thwip-burst" transform={`translate(${t.x} ${t.y})`}>
            {!venom && (
              <g stroke="hsl(var(--spidey-red))" strokeWidth="1.4" strokeLinecap="round">
                <line x1="-14" y1="-14" x2="-6" y2="-6" />
                <line x1="14" y1="-14" x2="6" y2="-6" />
                <line x1="0" y1="-18" x2="0" y2="-8" />
                <line x1="-18" y1="0" x2="-8" y2="0" />
                <line x1="18" y1="0" x2="8" y2="0" />
              </g>
            )}
            <text
              x="0"
              y={venom ? 6 : 22}
              textAnchor="middle"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontWeight={venom ? 400 : 700}
              fontSize={venom ? 14 : 11}
              letterSpacing={venom ? 4 : 2}
              fill={venom ? "hsl(var(--foreground))" : "hsl(var(--spidey-red))"}
              opacity={venom ? 0.85 : 1}
            >
              {venom ? "HHHSSS..." : "THWIP!"}
            </text>
          </g>
        ))}

        {webs.map((web) => {
          const len = Math.hypot(web.x2 - web.x1, web.y2 - web.y1).toFixed(1);
          if (venom) {
            const mx = (web.x1 + web.x2) / 2;
            const my = (web.y1 + web.y2) / 2;
            const dx = web.x2 - web.x1;
            const dy = web.y2 - web.y1;
            const nlen = Math.hypot(dx, dy) || 1;
            const wobble = Math.min(40, nlen * 0.18);
            const cx1 = mx + (-dy / nlen) * wobble;
            const cy1 = my + (dx / nlen) * wobble;
            const cx2 = mx + (dy / nlen) * wobble * 0.4;
            const cy2 = my + (-dx / nlen) * wobble * 0.4;
            return (
              <path
                key={web.id}
                className="spider-web"
                d={`M ${web.x1} ${web.y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${web.x2} ${web.y2}`}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
                style={{ ["--web-len" as string]: `${(Number(len) * 1.4).toFixed(1)}px` }}
              />
            );
          }
          return (
            <line
              key={web.id}
              className="spider-web"
              x1={web.x1}
              y1={web.y1}
              x2={web.x2}
              y2={web.y2}
              stroke="currentColor"
              strokeWidth="0.9"
              strokeDasharray={`3 4`}
              strokeLinecap="round"
              style={{ ["--web-len" as string]: `${len}px` }}
            />
          );
        })}

        <g ref={spiderRef} className="spider-root" data-moving="false">
          {venom ? (
            <>
              <g
                className="leg-a"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M -3 -6 L -14 -13 L -19 -8" />
                <path d="M -4 1  L -18 4  L -21 9" />
                <path d="M 4 -3  L 18 -4  L 21 1" />
                <path d="M 3 5   L 16 11  L 19 17" />
              </g>
              <g
                className="leg-b"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M -4 -3 L -18 -4 L -21 1" />
                <path d="M -3 5  L -14 11 L -17 17" />
                <path d="M 3 -6  L 14 -13 L 19 -8" />
                <path d="M 4 1   L 18 4   L 21 9" />
              </g>

              <g className="spider-body">
                <ellipse cx="0" cy="4.2" rx="6.5" ry="7.5" fill="currentColor" />
                <circle cx="0" cy="-3.8" r="4.4" fill="currentColor" />
                {/* Venom tendril drool */}
                <path
                  d="M 0 11 Q -1 14 0.5 17 Q -0.8 20 0 22"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
                {/* Stretched menacing mask eyes */}
                <path
                  d="M -4 -5.4 L -0.6 -3.6 L -1.6 -2.4 L -4.6 -3.6 Z"
                  fill="hsl(var(--background))"
                />
                <path
                  d="M 4 -5.4 L 0.6 -3.6 L 1.6 -2.4 L 4.6 -3.6 Z"
                  fill="hsl(var(--background))"
                />
              </g>
            </>
          ) : (
            <>
              <g
                className="leg-a"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M -3 -5 L -11 -10 L -14 -6" />
                <path d="M -4 1 L -14 3 L -16 7" />
                <path d="M 4 -2 L 14 -3 L 16 1" />
                <path d="M 3 4 L 12 8 L 14 13" />
              </g>
              <g
                className="leg-b"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                fill="none"
              >
                <path d="M -4 -2 L -14 -3 L -16 1" />
                <path d="M -3 4 L -11 8 L -13 13" />
                <path d="M 3 -5 L 12 -10 L 15 -6" />
                <path d="M 4 1 L 14 3 L 16 7" />
              </g>

              <g className="spider-body">
                <ellipse cx="0" cy="3.4" rx="5" ry="6" fill="currentColor" />
                <circle cx="0" cy="-3.2" r="3.6" fill="currentColor" />
                <path
                  d="M -2.6 -4.8 L -0.6 -3.6 L -1.4 -2.6 L -3.2 -3.4 Z"
                  fill="hsl(var(--background))"
                />
                <path
                  d="M 2.6 -4.8 L 0.6 -3.6 L 1.4 -2.6 L 3.2 -3.4 Z"
                  fill="hsl(var(--background))"
                />
              </g>
            </>
          )}
        </g>
      </svg>
    </>
  );
}
