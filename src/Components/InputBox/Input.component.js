import React from "react";

function Input(props) {
  const { style, name, type, placeholder, value, onChange, onKeyPress, maxLength, onClick } = props;

  return (
    <div>
      <textarea
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
    </div>
  );
}

export default Input;
