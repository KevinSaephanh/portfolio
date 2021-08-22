import React from "react";
import "./Loader.scss";

const Loader = (props) => {
  return (
    <div className="loader-wrapper">
      <div className="filler">
        <span>{props.progress}%</span>
      </div>
    </div>
  );
};

export default Loader;
