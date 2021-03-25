import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  const { name, type, placeholder, value, onChange } = props;

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
