import { useState } from "react";
import "./App.css";
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0);

  let myobj={
    username:"Abhishek",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card/>
    </>
  );
}

export default App;
