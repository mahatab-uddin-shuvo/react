import React from "react";
import CounterTask from "./Countertask";

const Count = (props) => {
  return (
    <p
      style={{
        backgroundColor: "gray",
        borderRadius: "50%",
        color: "white",
        display: "inline-block",
        width: "3em",
        height: "2.25em",
        paddingTop: "0.75cm",
        textAlign: "center",
        marginRight: "0.5cm",
        fontWeight: "bold",
        fontSize: "1.5em",
      }}
    > 
      {props.myCount}
    </p>
  );
};

export default Count;
