import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/50 border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-xl text-blue-400">Design Patterns</Link>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/pattern/singleton" className="hover:text-white">Patterns</Link>
          <Link to="/practice/clean-code" className="hover:text-white">Practices</Link>
        </div>
      </div>
    </nav>
  );
}
