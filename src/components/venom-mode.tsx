"use client";

import { SpiderEmblem } from "@/components/spidey-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

export function VenomMode() {
  const [bonded, setBonded] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeRef = useRef<string | undefined>(undefined);
  const previousThemeRef = useRef<string | undefined>(undefined);
  const setThemeRef = useRef(setTheme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    setThemeRef.current = setTheme;
  }, [setTheme]);

  useEffect(() => {
    let progress = 0;
    let hideTimer = 0;

    const onKey = (e: KeyboardEvent) => {
      const expected = KONAMI[progress];
      if (e.key === expected) {
        progress += 1;
        if (progress === KONAMI.length) {
          progress = 0;
          setBonded((prev) => {
            const next = !prev;
            if (next) {
              previousThemeRef.current = themeRef.current ?? "light";
              setThemeRef.current("dark");
              document.body.classList.add("venom");
            } else {
              document.body.classList.remove("venom");
              setThemeRef.current(previousThemeRef.current ?? "light");
            }
            return next;
          });
          setToastVisible(true);
          window.clearTimeout(hideTimer);
          hideTimer = window.setTimeout(() => setToastVisible(false), 2600);
        }
      } else {
        progress = e.key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(hideTimer);
      document.body.classList.remove("venom");
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed left-1/2 top-10 z-[60] -translate-x-1/2 transform transition-all duration-500 ${
        toastVisible ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-95 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 rounded-sm border-2 border-foreground bg-background px-5 py-3 shadow-[6px_6px_0_0_hsl(var(--spidey-red))]">
        <SpiderEmblem className="text-foreground" size={18} />
        <div className="flex flex-col leading-none">
          <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/60">
            {bonded ? "Bonded" : "Released"}
          </span>
          <span className="font-display text-xl italic text-foreground">
            {bonded ? "Symbiote." : "Free again."}
          </span>
        </div>
      </div>
    </div>
  );
}
