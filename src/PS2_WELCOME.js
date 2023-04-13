import { useState } from "react";

export const PS2_WELCOME = () => {
  const [size, setSize] = useState(18);
  return (
    <div>
      <div style={{ height: "100px" }}>
        <p style={{ fontSize: `${size}px` }}>Welcome</p>
      </div>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          setSize(size - 1);
        }}
      >
        -
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          setSize(size + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
