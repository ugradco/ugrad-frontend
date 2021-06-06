import React from "react";
import ReactCodeInput from "react-verification-code-input";
import Loading from "Components/loading";
import Button from "../Button/Button.component";
import InputBox from "../InputBox/InputBox.component";
import ArrowRight from "../icons/ArrowRight";
import styles from "./Login.module.css";
import { UgradLogo } from "../icons/index";

function Login(props) {
  const { form, setForm, handleRegister, handleLogin, isRegister, isLoading } = props;

  const onButtonClick = (event) => {
    if (isRegister) {
      handleRegister(event);
    } else {
      handleLogin(event);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.pane}>
        <UgradLogo className={styles.logo} />
        <Loading active inline="centered" />
      </div>
    );
  }
  return (
    <div className={styles.pane}>
      <UgradLogo className={styles.logo} />
      {!isRegister ? (
        <InputBox
          style={styles.inputLarge}
          name="email"
          type="email"
          placeholder="Enter email address."
          value={form.email}
          onChange={(event) => {
            setForm({ ...form, email: event.target.value });
          }}
        />
      ) : (
        <div className={styles.smaller}>
          <ReactCodeInput
            className={styles.inputSmall}
            type="text"
            name="token"
            fields={6}
            value={form}
            onComplete={(value) => {
              setForm({ ...form, token: value });
            }}
            autoFocus={false}
            loading={false}
          />
        </div>
      )}
      <Button className={styles.button} onClick={onButtonClick}>
        <ArrowRight className={styles.arrowIcon} />
      </Button>
    </div>
  );
}

export default Login;
