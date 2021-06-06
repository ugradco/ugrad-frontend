import React from "react";

function InputBox(props) {
  const { style, name, type, placeholder, value, onChange, onKeyPress, maxLength, onClick } = props;

  return (
    <input
      className={style}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength={maxLength}
      onClick={onClick}
    />
  );
}

export default InputBox;
