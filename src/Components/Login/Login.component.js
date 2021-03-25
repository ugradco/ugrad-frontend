import React from "react";
import Button from "../Button/Button.component";
import Input from "../InputBox/Input.component";
import ArrowRight from "../icons/ArrowRight";
import styles from "./Login.module.css";
import { Ugrad } from "../icons/index";

function Login(props) {
  const { href, inputValue, inputType, inputPlaceHolder, onInputChange, onButtonClick } = props;

  return (
    <div className={styles.pane}>
      <Ugrad className={styles.logo} />
      <Input
        name={inputType}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={onInputChange}
      />
      <Button href={href} className={styles.button} onClick={onButtonClick}>
        <ArrowRight />
      </Button>
    </div>
  );
}

export default Login;
