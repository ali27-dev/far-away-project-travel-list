export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Logo</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h2>Form</h2>
    </div>
  );
}

function PackingList() {
  return (
    <div className="">
      <h3>List</h3>
    </div>
  );
}

function Stats() {
  return (
    <footer>
      <em>Your packing item X is </em>
    </footer>
  );
}
