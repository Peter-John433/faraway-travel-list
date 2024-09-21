import { useState } from "react";
export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return alert("please add an item");

    const newItem = {
      description,
      quantity,
      isPacked: false,
      id: Math.random(),
    };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div>
      <h3>what do you need for your 😍 trip</h3>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option num={num} key={num}>
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

        <button>add</button>
      </form>
    </div>
  );
}
