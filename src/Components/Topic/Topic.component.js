import React from "react";

import styles from "./Topic.module.css";

// TODO: selected durumunda ikonlar dolgulu olacak
function Topic({ children, ...props }) {
  return (
    <button type="button" className={styles.topic} {...props}>
      {children}
    </button>
  );
}

export default Topic;
