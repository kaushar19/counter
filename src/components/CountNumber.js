import React, { useState } from "react";
function CountNumber() {
  const [count, setCount] = useState(0);
  function Increase(e) {
    setCount(count + 1);
  }
  function Decrease(e) {
    setCount(count - 1);
  }
  return (
    <>
      <div className="flex-container">
        <div style={{ alignSelf: "center" }}>
          <button className="btn ">
            <span className="btntext" onClick={Decrease}>
              Decrease
            </span>
          </button>
        </div>
        <div style={{ alignSelf: "center", fontSize: 30 }}>{count}</div>
        <div style={{ alignSelf: "center" }}>
          <button className="btn ">
            <span className="btntext" onClick={Increase}>
              Increase
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CountNumber;
