import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="text-center py-4 border-t border-gray-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Best Practices & Design Patterns
      </footer>
    </div>
  );
}
