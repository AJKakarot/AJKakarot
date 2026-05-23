import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

function NavDivider() {
  return <span aria-hidden className="mx-1 h-4 w-px bg-foreground/15" />;
}

function NavTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        sideOffset={10}
        className="rounded-sm border border-foreground/15 bg-background px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/80"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

const iconButtonCls = cn(
  "group inline-flex size-9 items-center justify-center rounded-full",
  "text-foreground/55 transition-colors duration-200",
  "hover:text-foreground hover:bg-foreground/[0.04]"
);

export default function Navbar() {
  const socials = Object.entries(DATA.contact.social).filter(
    ([, social]) => social.navbar
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-30 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className={cn(
          "pointer-events-auto flex items-center gap-0.5 rounded-full",
          "border border-foreground/10 bg-background/80 px-2 py-1.5",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.12)]",
          "backdrop-blur-xl dark:bg-background/60"
        )}
      >
        {DATA.navbar.map((item) => (
          <NavTooltip key={item.href} label={item.label}>
            <Link
              href={item.href}
              className={iconButtonCls}
              aria-label={item.label}
            >
              <item.icon className="size-4" strokeWidth={1.5} />
            </Link>
          </NavTooltip>
        ))}

        <NavDivider />

        {socials.map(([name, social]) => (
          <NavTooltip key={name} label={social.name}>
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonCls}
              aria-label={social.name}
            >
              <social.icon className="size-4" />
            </Link>
          </NavTooltip>
        ))}

        <NavDivider />

        <NavTooltip label="Theme">
          <ModeToggle />
        </NavTooltip>
      </nav>
    </div>
  );
}
