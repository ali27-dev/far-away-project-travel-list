// Item-Component
export default function Item({
  itemObj,
  onAddItems,
  onDeleteItem,
  onToggleItem,
}) {
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
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
