import React from "react";
import Head from "next/head";
import styles from "Assets/styles/Home.module.css";
import Logo from "Components/icons/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ugrad - Koc University Collaborative Platform</title>
      </Head>

      <div className={styles.main}>
        <h3>Welcome! You ask, get answer</h3>
      </div>
    </div>
  );
}
