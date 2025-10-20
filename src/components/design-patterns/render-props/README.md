# Render Props Pattern

This folder contains examples of the **Render Props pattern** in React.  

---

## What is Render Props?

A **render prop** is a technique for sharing code between React components using a **function prop** that tells a component what to render.

Instead of hardcoding JSX inside a component, you pass a function as a prop and render based on its return value. This makes components reusable and flexible.

---

## Example

We have a `Counter` component that manages state.  
Instead of deciding how to render the UI, it **accepts a function as `children`**:

```tsx
<Counter>
  {(count, increment) => (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )}
</Counter>
