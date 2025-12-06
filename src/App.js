import { useState } from "react";
import { preconnect } from "react-dom";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
// LOGO-Component
function Logo() {
  return <h1>🏝️ far away 🧳</h1>;
}
// Form-Component
function Form({ onAddItems }) {
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
// Packing-Component
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            itemObj={item}
            onAddItems={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
// Item-Component
function Item({ itemObj, onAddItems, onToggleItem }) {
  return (
    <li style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={itemObj.id}
        onChange={() => onToggleItem(itemObj.id)}
      />
      <span>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onAddItems(itemObj.id)}>❌</button>
    </li>
  );
}
// State-Component
function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / totalItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed
        ${packedItems}(${percentage}%)
      }`}
      </em>
    </footer>
  );
}
