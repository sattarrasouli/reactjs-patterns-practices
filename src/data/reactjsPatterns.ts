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
    example: `function useWindowWidth() { ... }`,
  },
  {
    id: "context-api",
    title: "Context API",
    description: "Share global state without prop drilling.",
    example: `const ThemeContext = createContext(null);`,
  },
  {
    id: "render-props",
    title: "Render Props",
    description: "Share code using function props.",
    example: `function MouseTracker({ render }) { ... }`,
  },
  {
    id: "hoc",
    title: "Higher-Order Component (HOC)",
    description: "Wrap a component to provide reusable enhanced functionality.",
    example: `function withLogger(Component) { ... }`,
  },
  {
    id: "compound-components",
    title: "Compound Components",
    description: "Multiple components working together using shared state implicitly.",
    example: `<Accordion><Accordion.Item /></Accordion>`,
  },
  {
    id: "container-presenter",
    title: "Container-Presenter Pattern",
    description: "Separate UI components from logic/data components.",
    example: `const UserContainer = () => { ... }`,
  },
  {
    id: "controlled-uncontrolled",
    title: "Controlled vs Uncontrolled Components",
    description: "Manage form input via state (controlled) or DOM ref (uncontrolled).",
    example: `<input value={value} onChange={...} />`,
  },
  {
    id: "error-boundary-suspense",
    title: "Error Boundary + Suspense",
    description: "Handle UI fallback for async and error states gracefully.",
    example: `<Suspense fallback="Loading...">...</Suspense>`,
  },
  {
    id: "state-reducer",
    title: "State Reducer Pattern",
    description: "Allow consumers to control internal state transitions.",
    example: `useToggle({ reducer })`,
  },
];


export const reactPatternsDetails = [
  // ---------- Existing Patterns (Yours) ----------
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

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

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

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "200px", border: "1px solid gray" }}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker render={({ x, y }) => (
      <p>Mouse position: ({x}, {y})</p>
    )} />
  );
}`,
  },

  // ---------- ✅ NEW PATTERNS ----------
  {
    id: "hoc",
    title: "Higher-Order Component (HOC)",
    description: "A function that takes a component and returns a new component with extra capabilities.",
    example: `import React from "react";

function withLogger(WrappedComponent) {
  return function WrappedWithLogger(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

// Usage
export default function App() {
  return <HelloWithLogger name="John" />;
}`,
  },
  {
    id: "compound-components",
    title: "Compound Components",
    description: "Multiple components working together using shared implicit state via context.",
    example: `import React, { createContext, useContext, useState } from "react";

const AccordionContext = createContext(null);

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

function Item({ index, title, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;
  return (
    <div>
      <h3 onClick={() => setOpenIndex(isOpen ? null : index)}>{title}</h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

Accordion.Item = Item;

// Usage
export default function App() {
  return (
    <Accordion>
      <Accordion.Item index={0} title="Item 1">Content 1</Accordion.Item>
      <Accordion.Item index={1} title="Item 2">Content 2</Accordion.Item>
    </Accordion>
  );
}`,
  },
  {
    id: "container-presenter",
    title: "Container-Presenter Pattern",
    description: "Separate logic (container) from UI (presenter) for cleaner and reusable code.",
    example: `import React, { useEffect, useState } from "react";

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return <UserList users={users} />;
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <UserContainer />;
}`,
  },
  {
    id: "controlled-uncontrolled",
    title: "Controlled vs Uncontrolled Components",
    description: "Controlled components rely on React state; uncontrolled rely on refs for form inputs.",
    example: `import React, { useRef, useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}

function UncontrolledInput() {
  const inputRef = useRef();
  const handleSubmit = () => alert(inputRef.current.value);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`,
  },
  {
    id: "error-boundary-suspense",
    title: "Error Boundary + Suspense",
    description: "Gracefully handle async loading UI and unexpected component errors.",
    example: `import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError ? <p>Something went wrong.</p> : this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}`,
  },
  {
    id: "state-reducer",
    title: "State Reducer Pattern",
    description: "Give consumers control to modify or override internal state transitions.",
    example: `import { useState } from "react";

function useToggle({ reducer = (state) => !state } = {}) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn((prev) => reducer(prev));

  return { on, toggle };
}

// Usage override
function App() {
  const { on, toggle } = useToggle({
    reducer: (state) => state ? state : true, // custom: allow only turning ON
  });

  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}`,
  }
];


export const patterns = [
  { id: "singleton", title: "Singleton Pattern", description: "Ensure a class has only one instance." },
  { id: "observer", title: "Observer Pattern", description: "Allows objects to be notified of state changes." },
];
export const practices = [
  { id: "clean-code", title: "Clean Code", description: "Write readable and maintainable code." },
  { id: "solid", title: "SOLID Principles", description: "Core OOP design guidelines." },
  { id: "dry", title: "DRY (Don't Repeat Yourself)", description: "Avoid duplication by reusing logic and components." },
  { id: "kiss", title: "KISS Principle", description: "Keep code simple; avoid unnecessary complexity." },
  { id: "yagni", title: "YAGNI", description: "Don't build functionality until it's actually needed." },
  { id: "component-composition", title: "Component Composition", description: "Build UIs using small reusable components rather than large monolithic ones." },
  { id: "folder-structure", title: "Scalable Folder Structure", description: "Use a clear and scalable file architecture for your project." },
  { id: "performance", title: "Performance Optimization", description: "Write efficient code; avoid heavy re-renders and unnecessary computations." },
  { id: "accessibility", title: "Accessibility (a11y)", description: "Build inclusive interfaces that everyone can use." },
  { id: "testing", title: "Testing Best Practices", description: "Write maintainable unit, integration, and E2E tests." },
];
