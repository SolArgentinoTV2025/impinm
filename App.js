import React, { useState } from "react";
import Designer from "./components/Designer";
import Toolbox from "./components/Toolbox";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Toolbox setItems={setItems} />
      <Designer items={items} />
    </div>
  );
}
