import React from "react";

const PickLucky = (props) => {
    const pickRandom = ()=> {
        props.pickLuckyNum();
    }
  return (
    <>
    {props.luckyNum && <p>Your Lucy Number {props.luckyNum}</p>}
      <button onClick={pickRandom}>Pick Number</button>
    </>
  );
};
export default PickLucky;
