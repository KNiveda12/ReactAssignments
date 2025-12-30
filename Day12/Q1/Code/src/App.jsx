import { useState, lazy, Suspense } from "react";

// ✅ Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [counter, setCounter] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <h1>React.memo & Lazy Loading Demo</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      {/* ✅ Suspense required for lazy loading */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
