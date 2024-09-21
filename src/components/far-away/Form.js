export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <h3>what do you need for your 😍 trip</h3>
      <form onSubmit={handleSubmit}>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option num={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input type="text" placeholder="item..." />

        <button>add</button>
      </form>
    </div>
  );
}
