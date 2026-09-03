import type { TextSegment } from "./types";

type HighlightedTextProps = {
  segments: TextSegment[];
  className?: string;
  highlightClassName?: string;
};

export function HighlightedText({
  segments,
  className = "",
  highlightClassName = "text-brand-purple",
}: HighlightedTextProps) {
  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={segment.highlight ? highlightClassName : undefined}
        >
          {segment.text}
        </span>
      ))}
    </span>
  );
}
