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
  return (
    <div className="add-form">
      <p>What do you need for your 😍 trip?</p>
      {/* <input type="number" />
      <input type="text" />
      <button>ADD</button> */}
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} />
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
