import { useState } from "react";

// Form-Component
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQunatity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newArr = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newArr);
    onAddItems(newArr);

    setDescription("");
    setQunatity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your 😍 trip?</p>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQunatity(Number(e.target.value))}
      >
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
      <button>ADD</button>
    </form>
  );
}
