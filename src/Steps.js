import { useState } from "react";

const myMessage = ["feel the world", "marvelous hero", "super cool"];
export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //handle previous function
  function handlePre() {
    if (step > 1) return setStep((step) => step - 1);
  }

  //handle next fuction
  function handleNext() {
    if (step < 3) return setStep((step) => step + 1);
  }

  return (
    <>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>&times;</button>
      {isOpen && (
        <div className="app">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div>
            step{step}: {myMessage[step - 1]}
          </div>
          <div>
            <button onClick={handlePre}>previous</button>
            <button onClick={handleNext}>next</button>
          </div>
        </div>
      )}
    </>
  );
}
