import { useParams } from "react-router-dom";
import CodeBlock from "../../components/code-block/CodeBlock";
import { practices } from "../../data/reactjsPatterns";

export default function PracticePage() {
  const { id } = useParams();
  const practice = practices.find((p) => p.id === id);

  if (!practice) return <div className="p-8">Practice not found.</div>;

  const example = `// Example of clean code:
function getUserFullName(user) {
  return \`\${user.firstName} \${user.lastName}\`;
}`;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-green-400">{practice.title}</h1>
      <p className="text-gray-400 mb-6">{practice.description}</p>
      <CodeBlock code={example} />
    </div>
  );
}
