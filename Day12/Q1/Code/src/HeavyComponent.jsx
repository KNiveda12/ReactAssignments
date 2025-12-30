import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // Simulating heavy UI
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div>
      <h2>Heavy Component</h2>
      <p>This is a heavy UI section.</p>
    </div>
  );
}

// ✅ React.memo prevents unnecessary re-renders
export default React.memo(HeavyComponent);
