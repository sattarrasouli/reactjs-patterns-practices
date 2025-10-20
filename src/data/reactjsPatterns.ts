export interface ReactPattern {
  id: string;
  title: string;
  description: string;
  example?: string;
}

export const reactPatterns = [
  {
    id: "custom-hook",
    title: "Custom Hook",
    description: "Extract reusable logic into a hook.",
    example: `function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}`,
  },
  {
    id: "context-api",
    title: "Context API",
    description: "Share global state without prop drilling.",
    example: `const ThemeContext = createContext(null);
export function useTheme() { return useContext(ThemeContext); }`,
  },
  {
    id: "render-props",
    title: "Render Props",
    description: "Share code using function props.",
    example: `function MouseTracker({ render }) { ... }`,
  },
];


export const reactPatternsDetails = [
  {
    id: "custom-hook",
    title: "Custom Hook",
    description: "Extract reusable logic into a hook to reuse in multiple components.",
    example: `import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Usage
function Component() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}`,
  },
  {
    id: "context-api",
    title: "Context API",
    description: "Share global state or functions across components without prop drilling.",
    example: `import React, { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext(null);

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming context
export function useTheme() {
  return useContext(ThemeContext);
}

// Usage in a component
function ThemedButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}`,
  },
  {
    id: "render-props",
    title: "Render Props",
    description: "Use a function prop to dynamically share code between components.",
    example: `import React, { useState } from "react";

// Component using render prop
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return <div onMouseMove={handleMouseMove} style={{ height: "200px", border: "1px solid gray" }}>
    {render(position)}
  </div>;
}

// Usage
function App() {
  return (
    <MouseTracker render={({ x, y }) => (
      <p>Mouse position: ({x}, {y})</p>
    )} />
  );
}`,
  },
];


export const patterns = [
  { id: "singleton", title: "Singleton Pattern", description: "Ensure a class has only one instance." },
  { id: "observer", title: "Observer Pattern", description: "Allows objects to be notified of state changes." },
];

export const practices = [
  { id: "clean-code", title: "Clean Code", description: "Write readable and maintainable code." },
  { id: "solid", title: "SOLID Principles", description: "Core OOP design guidelines." },
];
