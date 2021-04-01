import React, { useState } from "react";
import { useRouter } from "next/router";
import Login from "Components/Login/Login.component";
import VerificationLogin from "Components/Login/VerificationLogin.component";
import Layout from "Components/Layout/Layout.component";
import Loading from "Components/loading";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";
import { LOCAL_STORAGE } from "../Constants/global.constants";

function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "" });
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = () => {
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
    console.log("sendId", JSON.stringify(form.email));
    apiGenerator("post")(API_ENDPOINTS.LOGIN, {
      email: form.email,
      token,
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          // TODO
          // throw new Error("Network response was not ok");
        } else {
          localStorage.setItem(LOCAL_STORAGE.accessToken, response.data.token);
        }
        setIsSubmitting(false);
        setIsLogging(true);
        console.log("successfully logged in");
        router.push("/main");
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
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
      <Layout type="login">
        <Login
          inputValue={form.email}
          inputType="email"
          onInputChange={handleChange}
          onButtonClick={handleRegister}
          inputPlaceHolder="Enter email address."
        />
      </Layout>
    );
  }
  return (
    <div>
      {isSubmitting ? (
        <Loading active inline="centered" />
      ) : (
        <Layout type="login">
          <VerificationLogin
            inputValue={token}
            inputType="token"
            onInputChange={(value) => {
              setToken(value);
            }}
            onButtonClick={handleLogin}
            inputPlaceHolder=""
          />
        </Layout>
      )}
    </div>
  );
}

export default LoginPage;
