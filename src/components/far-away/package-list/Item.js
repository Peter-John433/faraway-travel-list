export default function Item({ item }) {
  return (
    <div>
      <li style={item.isPacked ? { textDecoration: "line-through" } : {}}>
        <span>
          {item.quantity} {item.description} -
        </span>

        <button>x</button>
      </li>
    </div>
  );
}
