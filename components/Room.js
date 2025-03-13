import React from "react";

export default function Room({ x, y }) {
  return (
    <div className="room" style={{ left: x, top: y }}>
      🏠 Habitación
    </div>
  );
}
