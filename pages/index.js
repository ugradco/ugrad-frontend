import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Form, Loader, Button } from "semantic-ui-react";
// import axios from "axios";
import Login from "../src/Components/Authentication/Login.component";
import Layout from "../src/Components/Layout/Layout.component.js";
import Loading from "../src/components/loading";
import { styles } from "../styles/Home.module.css";
import { API_ENDPOINTS } from "../src/Constants/api.constants";

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

  /* useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
      } else {
        setIsSubmitting(false);
        setIsLogging(true);
      }
    }
    if (isLogging) {
      if (Object.keys(errors).length === 0) {
      } else {
        setIsLogging(false);
      }
    }
  }, [errors]); */

  const sendEmail = async () => {
    console.log(JSON.stringify(form.mail));
    const res = await fetch(API_ENDPOINTS.REGISTER, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: form.mail,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIsSubmitting(false);
        setIsLogging(true);
        console.log("successfully logged in");
        console.log(response.json());
        return response.blob();
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };
  const sendId = async () => {
    // console.log(JSON.stringify(form.mail));ß
    const resp = fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.mail,
        token: form.token,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setIsSubmitting(false);
        setIsLogging(true);
        console.log("successfully logged in");
        console.log(response.json());
        router.push("/main");
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };
  const handleSubmit = (e) => {
    if (!form.token) {
      sendEmail();
    } else {
      sendId();
    }
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleLogin = (e) => {
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
