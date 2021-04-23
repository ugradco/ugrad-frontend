import React from "react";

import styles from "./Topic.module.css";

// TODO: selected durumunda ikonlar dolgulu olacak
function Topic({ value, onClick = () => {}, children, ...props }) {
  return (
    <button type="button" value={value} className={styles.topic} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Topic;
