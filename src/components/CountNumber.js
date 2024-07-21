import React, { useState } from "react";
import "./CountNumber.css";
function CountNumber({ text }) {
  const [count, setCount] = useState(0);

  function Increase(e) {
    setCount(count + 1);
  }
  function Decrease(e) {
    setCount(count - 1);
  }
  var getTextStyle = () => {
    if (count > 1) {
      return { color: "green" };
    } else if (count === 0) {
      return { color: "black" };
    } else {
      return { color: "red" };
    }
  };
  return (
    <>
      <div className="flex-container">
        <div style={{ alignSelf: "center" }}>
          <button className="btn " onClick={Decrease}>
            <span className="btntext">Decrease</span>
          </button>
        </div>
        <div className="counttextt textShow" style={getTextStyle()}>
          {count}
        </div>
        <div style={{ alignSelf: "center" }}>
          <button className="btn " onClick={Increase}>
            <span className="btntext">Increase</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CountNumber;
