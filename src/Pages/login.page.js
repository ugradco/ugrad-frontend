import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginAPI } from "Actions/Login.actions";

import Login from "Components/Login/Login.component";
import LoginLayout from "Components/Layout/LoginLayout.component";

import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { REQUEST_STATUS } from "../Constants/global.constants";

function LoginPage(props) {
  const { loginAPI, login, history } = props;

  const [form, setForm] = useState({ email: "", token: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (login.loginCTX.status === REQUEST_STATUS.SUCCESS) {
      setIsSubmitting(false);
      setIsLogging(true);
      history.push("/");
    }
  }, [login.loginCTX.status]);

  // TODO: server error 404
  const sendEmail = () => {
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
      })
      .catch((error) => {
        console.log("error", error);
        console.error("There has been a problem during login", error);
        setError("There was an error, please try again later");
        setIsSubmitting(false);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.email === "") {
      alert("Email is required!");
    } else {
      setIsSubmitting(true);
      sendEmail();
      // const errs = validate();
      // setErrors(errs);
    }
  };

  const handleLogin = (e) => {
    if (form.token === "") {
      alert("Token is required!");
    } else {
      setIsSubmitting(true);
      loginAPI(form);
      e.preventDefault();
      // const errs = validate();
      // setErrors(errs);
      setIsLogging(true);
    }
  };

  const validate = () => {
    const err = {};

    if (!form.email) {
      err.email = "Email is required!";
    }
    return err;
  };

  return (
    <LoginLayout>
      <Login
        isLoading={isSubmitting}
        isRegister={!isLogging}
        form={form}
        setForm={setForm}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        inputPlaceHolder="Enter email address."
      />
    </LoginLayout>
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
