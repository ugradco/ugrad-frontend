import React from "react";

function Input(props) {
  const { style, name, type, placeholder, value, onChange, maxLength } = props;

  return (
    <div>
      <input
        className={style}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
}

export default Input;
