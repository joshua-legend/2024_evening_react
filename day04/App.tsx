// Components - Props + State

import { useState } from "react";

// html + css => Components
// js[랜더링]  => Props
// js[이벤트]  => State

function App() {
  const [color, setColor] = useState("black");
  const [num, setNum] = useState(1);
  const plus = () => {
    setColor(num > 9 ? "blue" : "black");
    setNum(num + 1);
  };
  const minus = () => {
    setColor(num < -9 ? "red" : "black");
    setNum(num - 1);
  };

  return (
    <div>
      <button onClick={minus}>-</button>
      <span style={{ color }}>{num}</span>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;
