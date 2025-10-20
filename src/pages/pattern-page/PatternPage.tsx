import { useParams } from "react-router-dom";
import CodeBlock from "../../components/code-block/CodeBlock";
import { patterns } from "../../data/reactjsPatterns";

export default function PatternPage() {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === id);

  if (!pattern) return <div className="p-8">Pattern not found.</div>;

  const example = `class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}`;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">{pattern.title}</h1>
      <p className="text-gray-400 mb-6">{pattern.description}</p>
      <CodeBlock code={example} />
    </div>
  );
}
