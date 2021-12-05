import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  return (
    <div className="container">
      <div className="row" style={{columnGap:'10px', height:'600px'}}>
        <div className="col-md-8" style={{ border: "1px solid red"}}>
          <h5 style={{ textAlign: "center" }}>Content</h5>
        </div>
        <div className="col-md-3" style={{ border: "1px solid red" }}>
          <h5 style={{ textAlign: "center" }}>Side bar</h5>
        </div>
      </div>
    </div>
  );
};

export default Content;
