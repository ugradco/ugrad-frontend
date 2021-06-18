import React from "react";
import styles from "./Topic.module.css";

// TODO: selected ikon dolgusu
function Topic({ value, onClick = () => {}, children, ...props }) {
  return (
    <button type="button" value={value} className={styles.topic} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Topic;
