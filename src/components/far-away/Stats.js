export default function Footer(props) {
  const itemLength = props.liftItem.length;
  const itemPacked = props.liftItem.ispacked;
  return (
    <div>
      you have {itemLength} items on your list, and you already packed{" "}
      {itemPacked}(X%)
    </div>
  );
}
