import React, { useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import Link from "next/link";
import cookie from "js-cookie";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";

function Home() {
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set("token", data.token, { expires: 2 });
          Router.push("/");
        }
      });
  }
  const { data, revalidate } = useSWR("/api/me", async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Head>
        <title>Welcome to Ugrad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Ugrad - Find Whatever You Want To Learn</h1>
      {/*<Image src="/../ugrad.svg" alt="Ugrad" width={500} height={500} />*/}

      {loggedIn && (
        <>
          <p>Welcome {data.email}!</p>
          <button
            onClick={() => {
              cookie.remove("token");
              revalidate();
            }}
          >
            Logout
          </button>
        </>
      )}
      {!loggedIn && (
        <>
          <form styles={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              name="email"
              type="email"
              value={email}
              placeholder="abcde16@ku.edu.tr"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.buttonLogin}>
              <button className={styles.login}>
                <Link href="/main">Login</Link>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Home;
