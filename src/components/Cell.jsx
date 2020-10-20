import React from "react";

export default function Cell(props) {
  return (
    <>
      <div className="cell" onClick={() => props.handleClick(props.id)}>
        {props.value}
      </div>
    </>
  );
}
