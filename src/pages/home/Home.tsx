import { Link } from "react-router-dom";
import { patterns, practices } from "../../data/reactjsPatterns";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Best Practices & Design Patterns</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Patterns</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {patterns.map((p) => (
            <Link
              key={p.id}
              to={`/pattern/${p.id}`}
              className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 hover:bg-gray-800 transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-400">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">ReactJS Patterns</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            to="/react-patterns"
            className="p-4 bg-purple-700 rounded-xl border border-gray-800 hover:bg-purple-600 transition-all"
          >
            <h3 className="text-lg font-semibold text-white">View ReactJS Patterns</h3>
            <p className="text-gray-200 text-sm mt-2">Explore common patterns used in React applications.</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {practices.map((p) => (
            <Link
              key={p.id}
              to={`/practice/${p.id}`}
              className="p-4 bg-gray-900/40 rounded-xl border border-gray-800 hover:bg-gray-800 transition-all"
            >
              <h3 className="text-lg font-semibold text-green-400">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
