import React, { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
          marginBottom: "10px",
          textAlign: "center"
        }}
      >
        This is a color toggle div
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
