import React from "react";
import Head from "next/head";
import styles from "Assets/styles/Home.module.css";
import Logo from "Components/icons/Logo";
import Image from "next/image";
import Layout from "../Components/Layout/Layout.component";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>uGrad - Koc University Collaborative Platform</title>
      </Head>
      <Layout type="main" className={styles.main} />
    </div>
  );
}
