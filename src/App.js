// import { useState } from "react";
import Counter from "./Counter";
import Steps from "./Steps";
import FarAway from "./components/far-away/FarAway-Comp";
import Accordion from "./components/accordion/Accordion";

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <hr />
      <Counter />
      <hr />
      <FarAway />
      <hr />
      <Accordion />
    </div>
  );
}
