import React from "react";
import "./Title.css";

const Title = ({ subTitle, title, bgColor }) => {
  return (
    <div className="title" style={{ backgroundColor: bgColor }}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;