import React from "react";
import Button from "../Button/Button.component";
import Input from "../InputBox/Input.component";
import ArrowRight from "../icons/ArrowRight";
import styles from "./Login.module.css";
import { Ugrad } from "../icons/index";

function Login({ href }) {
  return (
    <div className={styles.pane}>
      <Ugrad className={styles.logo} />
      <Input name="email" type="email" placeholder="Enter email address." />
      <Button href={href} className={styles.button}>
        <ArrowRight />
      </Button>
    </div>
  );
}

export default Login;
