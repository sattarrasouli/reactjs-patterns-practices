import { Link } from "react-router-dom";
import { reactPatterns } from "../../data/reactjsPatterns";


export default function ReactPatternsPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
        ReactJS Patterns
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {reactPatterns.map((pattern) => (
          <Link
            key={pattern.id}
            to={`/react-pattern/${pattern.id}`}
            className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 hover:bg-gray-800 transition-all"
          >
            <h3 className="text-lg font-semibold text-purple-300">
              {pattern.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">{pattern.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
