import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import Button from "./Button.component";

function IconButton({ text, onClick, count, selected, children, className, ...props }) {
  return (
    <Button
      className={cn(styles.iconButton, className, selected && styles.ButtonSelected)}
      onClick={onClick}
      {...props}
    >
      {text && <div className={styles.text}>{text}</div>}
      {children}
      {count > 0 && <div className={styles.notify}>{count}</div>}
    </Button>
  );
}

export default IconButton;
