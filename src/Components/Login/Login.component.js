import React from "react";
import styled from "styled-components";
import ReactCodeInput from "react-verification-code-input";
import Loading from "Components/loading";
import Button from "../Button/Button.component";
import InputBox from "../InputBox/InputBox.component";
import ArrowRight from "../icons/ArrowRight";
import styles from "./Login.module.css";
import { UgradLogo } from "../icons/index";

const VerificationInfo = styled.p`
  margin-top: 15px !important;
  font-weight: 600 !important;
`;
const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    margin: 0;
    font-weight: 500;
  }
  input {
    margin: 10px 10px 0 0;
    border: none !important;
    border-radius: 5px;
    width: 40px !important;
    font-family: var(--font);
  }
`;

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
        <div className={styles.loader}>
          <Loading active inline="centered" />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.pane}>
      <UgradLogo className={styles.logo} />
      {isRegister ? (
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
        <TokenContainer>
          <p>{form.email}</p>
          <VerificationInfo>Email verification code</VerificationInfo>
          <ReactCodeInput
            className={styles.inputSmall}
            type="text"
            name="token"
            fields={6}
            onComplete={(value) => {
              setForm({ ...form, token: value.toUpperCase() });
            }}
            autoFocus={false}
            loading={false}
          />
        </TokenContainer>
      )}
      <Button className={styles.button} onClick={onButtonClick}>
        <ArrowRight className={styles.arrowIcon} />
      </Button>
    </div>
  );
}

export default Login;
