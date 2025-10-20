import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


export default function CodeBlock({ code, language = "typescript" }: { code: string; language?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-800 mt-4">
      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}