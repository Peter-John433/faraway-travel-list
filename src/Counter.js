import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [doStep, setDoStep] = useState(1);
  const date = new Date("june 23 2000");
  date.setDate(date.getDate() + count);
  // const logo = new Date("may 20 2003");
  // logo.setDate(logo.getFullYear() + count);

  function handleReset() {
    setCount(0);
    setDoStep(1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={doStep}
            onChange={(e) => setDoStep(Number(e.target.value))}
          />
          {/* <button onClick={() => setDoStep((c) => c - 1)}>-</button> */}
          <span>step:{doStep}</span>
          {/* <button onClick={() => setDoStep((c) => c + 1)}>+</button> */}
        </div>
        <div>
          <button onClick={() => setCount((c) => c - doStep)}>-</button>
          <span>
            count:{" "}
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </span>
          <button onClick={() => setCount((c) => c + doStep)}>+</button>
        </div>
      </div>
      <div>{date.toDateString()}</div>
      {/* <div>{logo.toLocaleDateString()}</div> */}

      <div>
        <button onClick={handleReset}>reset count</button>
      </div>
    </div>
  );
}
