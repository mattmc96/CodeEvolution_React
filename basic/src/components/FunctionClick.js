import React from "react";

function FunctionClick() {
  function myClick() {
    console.log("button called");
  }
  return (
    <div>
      <button onClick={myClick}>Click</button>
    </div>
  );
}

export default FunctionClick;
