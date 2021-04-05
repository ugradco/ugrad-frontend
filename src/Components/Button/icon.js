import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import Button from "./Button.component";

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  );
}

export default IconButton;
