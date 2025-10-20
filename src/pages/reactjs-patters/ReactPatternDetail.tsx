import { useParams } from "react-router-dom";
import CodeBlock from "../../components/code-block/CodeBlock";
import { reactPatternsDetails } from "../../data/reactjsPatterns";


export default function ReactPatternDetail() {
  const { id } = useParams();
  const pattern = reactPatternsDetails.find((p) => p.id === id);

  if (!pattern) return <div className="p-8 text-gray-400">Pattern not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">{pattern.title}</h1>
      <p className="text-gray-400 mb-6">{pattern.description}</p>

      {pattern.example && <CodeBlock code={pattern.example} />}
    </div>
  );
}
