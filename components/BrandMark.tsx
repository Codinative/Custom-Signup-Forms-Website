/** Brand glyph - a stylised signup form + checkmark, in the blue brand gradient. */
export default function BrandMark({ size = 34, radius = 10 }: { size?: number; radius?: number }) {
  return (
    <span className="mark" style={{ width: size, height: size, borderRadius: radius }}>
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v8" />
        <path d="M14 3v4h4" />
        <path d="M6 3v18h7" />
        <path d="M9 9h5M9 13h3" />
        <path d="m14.5 19 2 2 4-4" />
      </svg>
    </span>
  );
}
