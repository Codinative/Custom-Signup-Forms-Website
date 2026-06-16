import type { JSX } from "react";

type Props = { name: string; size?: number; stroke?: number; className?: string };

/** Lightweight inline icon set (stroke-based, matches the app's visual language). */
const PATHS: Record<string, JSX.Element> = {
  form: <><path d="M5 3h10l4 4v14H5z" /><path d="M15 3v4h4M8 11h8M8 15h8M8 7h3" /></>,
  builder: <><rect x="3" y="4" width="18" height="5" rx="1.5" /><rect x="3" y="12" width="11" height="5" rx="1.5" /><path d="M17.5 12.5v5M15 15h5" /></>,
  layers: <><path d="M12 3 3 8l9 5 9-5z" /><path d="m3 13 9 5 9-5" /></>,
  fields: <><rect x="3" y="5" width="18" height="4" rx="1.5" /><rect x="3" y="12" width="18" height="4" rx="1.5" /><path d="M6 19h7" /></>,
  userCheck: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.3 2.7-6 6-6 1 0 2 .25 2.8.7" /><path d="m15 17 2 2 4-4" /></>,
  userPlus: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.3 2.7-6 6-6 1.3 0 2.5.4 3.5 1.1" /><path d="M18 13v6M15 16h6" /></>,
  inbox: <><path d="M3 13h5l1.5 3h5L16 13h5" /><path d="M5 5h14l2 8v6H3v-6z" /></>,
  group: <><circle cx="8" cy="9" r="3" /><path d="M2 19c0-3 2.7-5 6-5s6 2 6 5" /><path d="M16 7a3 3 0 0 1 0 6M22 19c0-2.4-1.5-4-4-4.5" /></>,
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  zap: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  checkSm: <path d="m5 12.5 4.5 4.5L19 7" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  shield: <><path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" /></>,
  sliders: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-2 0-1.3 1-2 2.2-2H18a3 3 0 0 0 3-3c0-5-4-8-9-8z" /><circle cx="7.5" cy="11.5" r="1" /><circle cx="12" cy="8" r="1" /><circle cx="16.5" cy="11.5" r="1" /></>,
  upload: <><path d="M12 16V4M8 8l4-4 4 4" /><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></>,
  code: <><path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /></>,
  plug: <><path d="M9 3v5M15 3v5M7 8h10v2a5 5 0 0 1-10 0z" /><path d="M12 15v6" /></>,
  arrowR: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevR: <path d="m9 6 6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  info: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5M12 8h.01" /></>,
  box: <><path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></>,
  book: <><path d="M5 4h9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H5z" /><path d="M5 4v13.5" /></>,
  doc: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 13h5M10 16h5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  rocket: <><path d="M5 14c-1.5 1.5-2 5-2 5s3.5-.5 5-2M12 3c4 1.5 6 5.5 6 9l-4 4H9l-4-4c0-3.5 2-7.5 6-9" /><circle cx="12" cy="9" r="1.6" /></>,
  refresh: <><path d="M4 12a8 8 0 0 1 13.5-5.8L20 8M20 12a8 8 0 0 1-13.5 5.8L4 16" /><path d="M20 4v4h-4M4 20v-4h4" /></>,
  store: <><path d="M4 9h16v11H4z" /><path d="M3 9 5 4h14l2 5M9 20v-6h6v6" /></>,
};

export default function Icon({ name, size = 20, stroke = 1.8, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.info}
    </svg>
  );
}
