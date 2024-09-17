import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "socks", quantity: 12, packed: false },
  { id: 3, description: "pen", quantity: 5, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <h1>my travel list project</h1>
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴 Far Way 💼</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    setDescription("");
    setQuantity(1);

    console.log(newItems);
  }

  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <form onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <li style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span>{item.quantity}</span>
        <span>{item.description}</span>
        <button>❌</button>
      </li>
    </div>
  );
}

function Stats() {
  return (
    <div>
      <footer className="stats">
        <em>you hav X items on your list, and you already packed (X%)</em>
      </footer>
    </div>
  );
}
