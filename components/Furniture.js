import React from "react";

export default function Furniture({ x, y }) {
  return (
    <div className="furniture" style={{ left: x, top: y }}>
      🛋 Mueble
    </div>
  );
}
