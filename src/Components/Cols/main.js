import React from "react";
import styles from "./main.module.css";

function MainCol({ children }) {
  return <div className={styles.main}>{children}</div>;
}

export default MainCol;
