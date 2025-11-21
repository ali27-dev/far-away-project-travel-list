import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ far away 🧳</h1>;
}

function Form() {
  let [description, setDescription] = useState("");
  let [quantity, setQunatity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newArr = {
      description: { description },
      quantity: { quantity },
      packed: true,
      id: Date(),
    };
    console.log(newArr);

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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itemObj }) {
  return (
    <li style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
      <input type="checkbox" name="" id="" />
      <span>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
