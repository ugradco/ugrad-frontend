import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Form, Loader, Button } from "semantic-ui-react";
// import axios from "axios";
import Login from "Components/Authentication/Login.component";
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
  const [form, setForm] = useState({ mail: "", token: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = () => {
    console.log(JSON.stringify(form.mail));
    apiGenerator("post")(API_ENDPOINTS.REGISTER, {
      email: form.mail,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    console.log("sendId", JSON.stringify(form.mail));
    apiGenerator("post")(API_ENDPOINTS.LOGIN, {
      email: form.mail,
      token: form.token,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
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

  const handleSubmit = (e) => {
    console.log("handleSubmit", form.token);

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

    if (!form.mail) {
      err.mail = "Email is required";
    }
    if (form.mail && !form.token) {
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
        <Form onSubmit={handleSubmit}>
          <Form.Input
            fluid
            error={errors.title ? { content: "Please enter a Email", pointing: "below" } : null}
            label="Email Address"
            placeholder="abcde16@ku.edu.tr"
            name="mail"
            onChange={handleChange}
          />
          <Button type="submit">Log In</Button>
        </Form>{" "}
      </Layout>
    );
  }
  return (
    <div>
      {isSubmitting ? (
        <Loader active inline="centered" />
      ) : (
        <Layout>
          {/* <Login onSubmit={handleSubmit} onChange={handleChange} /> */}
          <Form onSubmit={handleLogin}>
            <Form.Input
              fluid
              error={errors.title ? { content: "Please enter a TOKEN", pointing: "below" } : null}
              label="Ugrad Verification Code"
              placeholder="ABCDEF"
              name="token"
              onChange={handleChange}
            />
            <Button type="submit">Log In</Button>
          </Form>{" "}
        </Layout>
      )}
    </div>
  );
}

export default Home;
