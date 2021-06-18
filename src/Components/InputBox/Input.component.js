import React from "react";

function Input(props) {
  const {
    style,
    styleOverride,
    inputRef,
    containerClassName,
    name,
    type,
    placeholder,
    value,
    onChange,
    onKeyPress,
    maxLength,
    onClick,
  } = props;

  return (
    <div className={containerClassName}>
      <textarea
        ref={inputRef}
        className={style}
        style={styleOverride}
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
