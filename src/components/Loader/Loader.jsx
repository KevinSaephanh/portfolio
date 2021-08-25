import React from "react";
import "./Loader.scss";

const Loader = (props) => {
  const fillerStyles = {
    width: `${props.progress}%`,
    backgroundColor: "turquoise",
  };

  return (
    <div className="loader-container">
      <div className="filler" style={fillerStyles} />
      {<div className="loader-text">LOADING...</div>}
    </div>
  );
};

export default Loader;
