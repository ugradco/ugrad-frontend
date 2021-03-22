import React, { useState } from "react";
import Button from "../src/Components/Button/Button.component";
import Input from "../src/Components/InputBox/Input.component";

function Home() {
  return (
    <div>
      <h1>ugrad</h1>
      <Input />
      <Button>Sign In!</Button>
    </div>
  );
}

export default Home;
