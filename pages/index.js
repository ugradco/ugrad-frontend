import React, { useState } from "react";
import Login from "../src/Components/Authentication/Login.component";
import Layout from "../src/Components/Layout/Layout.component.js";

function Home() {
  return (
    <Layout>
      <Login href="/authentication" />
    </Layout>
  );
}

export default Home;
