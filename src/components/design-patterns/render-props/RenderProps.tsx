import React from "react";

// Counter component uses render props pattern
type CounterProps = {
  children: (count: number, increment: () => void) => React.ReactNode;
};

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  // Instead of returning JSX directly, we call children as a function
  return <>{children(count, increment)}</>;
};

// Example usage
export const RenderPropExample: React.FC = () => {
  return (
    <Counter>
      {(count, increment) => (
        <div>
          <p>Current count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      )}
    </Counter>
  );
};
