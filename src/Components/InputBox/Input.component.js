import React from "react";
import styles from "./Input.module.css";

function Input({ href, children, ...props }) {
  return (
    <form styles={styles.form}>
      <input className={styles.input} name="email" type="email" placeholder="username@ku.edu.tr" />
    </form>
  );
}

export default Input;
