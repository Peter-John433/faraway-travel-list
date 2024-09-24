import AccordionItem from "./AccordionItem";

export default function AccordionComp({ data }) {
  return (
    <div>
      {data.map((item) => (
        <AccordionItem
          title={item.title}
          text={item.text}
          num={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
}
