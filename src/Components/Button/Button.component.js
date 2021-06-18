import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, onClick, ...props }) {
  return (
    <button type="button" {...props} onClick={onClick}>
      {children}
    </button>
  );
}

function Button({ full = false, children, onClick, className, ...props }) {
  const { href } = props;
  const Comp = href ? LinkButton : BaseButton;

  return (
    <Comp className={cn(styles.button, full && styles.fullWidth, className)} onClick={onClick} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
