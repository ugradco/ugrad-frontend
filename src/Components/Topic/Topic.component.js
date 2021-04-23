import React from "react";

import styles from "./Topic.module.css";

// TODO: selected durumunda ikonlar dolgulu olacak
function Topic({ onClick, children, ...props }) {
  return (
    <button type="button" className={styles.topic} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Topic;
