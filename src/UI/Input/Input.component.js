import React from "react";

const Input = (props) => {
  const { value, placeholder } = props;
  return <input className="ug-button" placeholder={placeholder} value={value} />;
};

export default Input;
