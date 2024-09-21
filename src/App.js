// import { useState } from "react";
import Counter from "./Counter";
import Steps from "./Steps";
import FarAway from "./components/far-away/FarAway-Comp";

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <hr />
      <Counter />
      <hr />
      <FarAway />
    </div>
  );
}
