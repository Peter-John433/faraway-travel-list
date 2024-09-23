export default function Item({ item, handleDeleteItem, handleToggle }) {
  return (
    <div>
      <li
        style={
          item.isPacked ? { textDecoration: "line-through", color: "red" } : {}
        }
      >
        <input
          type="checkbox"
          value={item.isPacked}
          onChange={() => handleToggle(item.id)}
        />
        <span>
          {item.quantity} {item.description} -
        </span>

        <button onClick={() => handleDeleteItem(item.id)}>x</button>
      </li>
    </div>
  );
}
