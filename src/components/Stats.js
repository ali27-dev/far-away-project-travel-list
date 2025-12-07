// State-Component
export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some iteams to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.floor((packedItems / totalItems) * 100);
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
