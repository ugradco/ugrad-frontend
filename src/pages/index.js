import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Loader, Button } from "semantic-ui-react";
// import axios from "axios";
import Login from "Components/Login/Login.component";
import Layout from "Components/Layout/Layout.component";
import Loading from "Components/loading";
import { styles } from "Assets/styles/Home.module.css";
import { API_ENDPOINTS } from "Constants/api.constants";
import { apiGenerator } from "Utils";

/*
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.ugrad.co/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
*/

function Home() {
  // const response = { user: "", token: "" };
  const router = useRouter();
  const [form, setForm] = useState({ email: "", token: "" });
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
      token: form.token,
    })
      .then((response) => {
        if (!response.ok) {
          // TODO
          // throw new Error("Network response was not ok");
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
    console.log("handleRegister", form.email);

    sendEmail();

    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleLogin = (e) => {
    sendId();
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setIsLogging(true);
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
      err.email = "Email is required";
    }
    if (form.email && !form.token) {
      err.token = "Token is required";
    }
    return err;
  };

  if (isSubmitting) {
    return <Loader active inline="centered" />;
  } else if (!isLogging) {
    return (
      <Layout>
        {/* <Login onSubmit={handleSubmit} onChange={handleChange} /> */}
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
        <Loader active inline="centered" />
      ) : (
        <Layout>
          <Login
            inputValue={form.token}
            inputType="token"
            onInputChange={handleChange}
            onButtonClick={handleLogin}
            inputPlaceHolder="Enter verification code."
          />
          {/* <Login onSubmit={handleSubmit} onChange={handleChange} /> */}
        </Layout>
      )}
    </div>
  );
}

export default Home;
