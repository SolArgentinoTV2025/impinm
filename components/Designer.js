import React from "react";
import Room from "./Room";
import Furniture from "./Furniture";

export default function Designer({ items }) {
  return (
    <div className="designer">
      {items.map((item, index) =>
        item.type === "room" ? (
          <Room key={index} {...item} />
        ) : (
          <Furniture key={index} {...item} />
        )
      )}
    </div>
  );
}
