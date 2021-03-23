import React, { useState } from "react";
import Button from "../Button/Button.component";
import Input from "../InputBox/Input.component";
import Layout from "../Layout/Layout.component";
import style from "../Authentication/Login.module.css";
import { Ugrad } from "../icons/index";

function Login({ href, children }) {
  return (
    <div className={style.pane}>
      <Ugrad />
      <h1>uGrad</h1>
      <Input />
      <Button href={href}>Sign In!</Button>
    </div>
  );
}

export default Login;
