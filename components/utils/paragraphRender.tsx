type Cor = "roxo" | "verde";

const CORES: Record<Cor, string> = {
  roxo: "text-[#7C4DFF]",
  verde: "text-[#01AEAA]",
};

interface ParagraphRenderProps {
  text: Record<string, string>;
  cor: Cor;
  tamanho?: number; // em px
  className?: string;
}

function getIndex(key: string): number {
  return parseInt(key.replace("t", ""), 10);
}

export function ParagraphRender({ text, cor, tamanho, className }: ParagraphRenderProps) {
  const entries = Object.entries(text);
  const style = tamanho ? { fontSize: `${tamanho}px` } : undefined;

  return (
    <p className={`font-semibold text-black ${className ?? ""}`} style={style}>
      {entries.map(([key, value]) => {
        const index = getIndex(key);
        const isPar = index % 2 === 0;

        if (!isPar) {
          return <span key={key}>{value} </span>;
        }

        return (
          <span key={key} className={CORES[cor]}>
            {value}{" "}
          </span>
        );
      })}
    </p>
  );
}