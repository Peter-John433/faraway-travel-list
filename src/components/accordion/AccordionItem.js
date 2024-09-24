import { useState } from "react";

export default function AccordionItem({ title, text, num }) {
  const [isOpen, setIsOpen] = useState(false);
  const red = "red";
  const bg = "blue";
  return (
    <div
      className="accordion-item"
      style={isOpen ? { color: red, backgroundColor: bg } : {}}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <div className="my-accord">
        <div>{num < 9 ? `0${num}` : `${num + 1}`}</div>
        <h3>{title}</h3>
        <div style={isOpen ? { color: "yellow" } : {}}>
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && <p className="text">{text}</p>}
    </div>
  );
}
