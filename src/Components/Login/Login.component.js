import React from "react";
import ReactCodeInput from "react-verification-code-input";
import Button from "../Button/Button.component";
import InputBox from "../Input/InputBox.component";
import ArrowRight from "../icons/ArrowRight";
import styles from "./Login.module.css";
import { UgradLogo } from "../icons/index";

function Login(props) {
  const { href, inputValue, inputType, inputPlaceHolder, onInputChange, onButtonClick } = props;
  return (
    <div className={styles.pane}>
      <UgradLogo className={styles.logo} />
      {(() => {
        if (inputType === "email") {
          return (
            <InputBox
              style={styles.inputLarge}
              name={inputType}
              type={inputType}
              placeholder={inputPlaceHolder}
              value={inputValue}
              onChange={onInputChange}
            />
          );
        } else if (inputType === "token") {
          return (
            <div className={styles.smaller}>
              <ReactCodeInput
                className={styles.inputSmall}
                name={inputType}
                type="text"
                fields={6}
                value={inputValue}
                onComplete={onInputChange}
                autoFocus={false}
                loading={false}
              />
            </div>
          );
        }
      })()}

      <Button href={href} className={styles.button} onClick={onButtonClick}>
        <ArrowRight className={styles.arrowIcon} />
      </Button>
    </div>
  );
}

export default Login;
