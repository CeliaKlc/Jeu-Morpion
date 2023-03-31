import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState(1);

  const nextTurn = () => {
    setTurn(turn + 1);
  };
  return (
    <div
      className="App"
      style={{
        display: "inline-grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
      <Button turn={turn} nextTurn={nextTurn} />
    </div>
  );
}

export default App;
