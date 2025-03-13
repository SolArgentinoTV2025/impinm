import React from "react";

export default function Toolbox({ setItems }) {
  const addItem = (type) => {
    setItems((prev) => [...prev, { type, x: 50, y: 50 }]);
  };

  return (
    <div className="toolbox">
      <button onClick={() => addItem("room")}>Añadir Habitación</button>
      <button onClick={() => addItem("furniture")}>Añadir Mueble</button>
    </div>
  );
}
