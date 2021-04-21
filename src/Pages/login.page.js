import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginAPI } from "Actions/Login.actions";

import Login from "Components/Login/Login.component";
import VerificationLogin from "Components/Login/VerificationLogin.component";
import LoginLayout from "Components/Layout/LoginLayout.component";
import Loading from "Components/loading";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { LOCAL_STORAGE, REQUEST_STATUS } from "../Constants/global.constants";

function LoginPage(props) {
  const { loginAPI, login, history } = props;

  const [form, setForm] = useState({ email: "" });
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [errors, setErrors] = useState({});

  console.log("login", login);

  useEffect(() => {
    if (login.loginCTX.status === REQUEST_STATUS.SUCCESS) {
      setIsSubmitting(false);
      setIsLogging(true);
      history.push("/");
    }
  }, [login.loginCTX.status]);

  // TODO: server error 404
  const sendEmail = () => {
    // loginAPI({
    //   email: form.email,
    // });

    console.log(JSON.stringify(form.email));
    apiGenerator("post")(API_ENDPOINTS.REGISTER, {
      email: form.email,
    })
      .then((response) => {
        if (!response.ok) {
          // TODO
          // throw new Error("Network response was not ok");
        }
        setIsSubmitting(false);
        setIsLogging(true);
        console.log("successfully registered");
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };

  const sendId = async () => {
    loginAPI({
      email: form.email,
      token,
    });
    console.log("sendId", JSON.stringify(form.email));
  };

  const handleRegister = (e) => {
    if (form.email === "") {
      alert("Email is required!");
    } else {
      console.log("handleRegister", form.email);
      sendEmail();
      e.preventDefault();
      // const errs = validate();
      // setErrors(errs);
      setIsSubmitting(true);
    }
  };

  const handleLogin = (e) => {
    if (token === "") {
      alert("Token is required!");
    } else {
      sendId();
      e.preventDefault();
      // const errs = validate();
      // setErrors(errs);
      setIsLogging(true);
    }
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};

    if (!form.email) {
      err.email = "Email is required!";
    }
    if (form.email && !token) {
      err.token = "Token is required!";
    }
    return err;
  };

  if (isSubmitting) {
    return <Loading active inline="centered" />;
  } else if (!isLogging) {
    return (
      <LoginLayout>
        <Login
          inputValue={form.email}
          inputType="email"
          onInputChange={handleChange}
          onButtonClick={handleRegister}
          inputPlaceHolder="Enter email address."
        />
      </LoginLayout>
    );
  }
  return (
    <div>
      {isSubmitting ? (
        <Loading active inline="centered" />
      ) : (
        <LoginLayout>
          <VerificationLogin
            inputValue={token}
            inputType="token"
            onInputChange={(value) => {
              setToken(value);
            }}
            onButtonClick={handleLogin}
            inputPlaceHolder=""
          />
        </LoginLayout>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
  login: state.login,
});

const actionCreators = {
  loginAPI,
};

export default connect(mapStateToProps, actionCreators)(LoginPage);
