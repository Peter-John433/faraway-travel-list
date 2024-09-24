import AccordionComp from "./AccordionComp";
const faqs = [
  { id: 1, title: "what is your name", text: "i am john andre" },
  { id: 2, title: "where are you from", text: "i am from india" },
  { id: 3, title: "what is your occupation", text: "i am  a pharmacist" },
  { id: 4, title: "are you married?", text: "yes with two kids" },
];

export default function Accordion() {
  return (
    <div>
      <h1>Accordion</h1>

      <AccordionComp data={faqs} />
    </div>
  );
}
