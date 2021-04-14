import React from "react";

function Input(props) {
  const { style, name, type, placeholder, value, onChange, onKeyPress, maxLength } = props;

  return (
    <div>
      <input
        className={style}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        maxLength={maxLength}
      />
    </div>
  );
}

export default Input;
