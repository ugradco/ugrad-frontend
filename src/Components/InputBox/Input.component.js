import React from "react";
import styles from "./Input.module.css";

function Input({ name, type, placeholder }) {
  return (
    <form className={styles.form}>
      <input className={styles.input} name={name} type={type} placeholder={placeholder} />
    </form>
  );
}

export default Input;
