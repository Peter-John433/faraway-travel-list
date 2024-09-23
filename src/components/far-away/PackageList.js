import Item from "./package-list/Item";
// const listOfItems = [
//   { description: "shoes", quantity: 2, isPacked: false, id: 1 },
//   { description: "bags", quantity: 5, isPacked: true, id: 2 },
//   { description: "bread", quantity: 1, isPacked: false, id: 3 },
// ];
export default function PackageList({
  liftItem,
  handleDeleteItem,
  handleToggle,
  handleClearList,
}) {
  return (
    <div>
      <ul>
        {liftItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div>
        <button onClick={handleClearList}>clear list</button>
      </div>
    </div>
  );
}
