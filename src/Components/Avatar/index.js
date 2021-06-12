import classNames from "classnames";
import React from "react";

import styles from "./style.module.css";

const COLORS = {
  0: "#93A3B1",
  1: "#F6C28B",
  2: "#5296A5",
  3: "#82DDF0",
  4: "#9CE37D",
  5: "#87B37A",
  6: "#A96DA3",
  7: "#D57A66",
  8: "#D2E59E",
  9: "#F18F01",
  10: "#C73E1D",
  11: "#508991",
  12: "#B79CED",
  13: "#E5F9E0",
  14: "#C36F09",
  15: "#7261A3",
  16: "#7161EF",
  17: "#957FEF",
  18: "#FCBF49",
  19: "#F77F00",
  20: "#87BFFF",
  21: "#3F8EFC",
  22: "#2667FF",
  23: "#3B28CC",
  24: "#ADD7F6",
  25: "#AEC3B0",
};
const A_CHAR_CODE = "A".charCodeAt(0);

const getAvatarColor = (letter) => {
  const letterIndex = letter && letter.toUpperCase().charCodeAt(0) - A_CHAR_CODE;
  if (COLORS[letterIndex]) {
    return COLORS[letterIndex];
  }
  return COLORS[Math.random() % Object.keys(COLORS).length];
};

function Avatar({
  src = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/vprojectold1-tang-1474_2.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3ad8d7f89ccaa68eb265d67c62a1def0",
  alt,
  size = 40,
  name,
  className,
}) {
  if (name) {
    return (
      <div
        className={classNames(styles.avatarContainer, className)}
        style={{ width: size, height: size, backgroundColor: getAvatarColor(name) }}
      >
        <p style={{ fontSize: size / 2 }}> {name[0]}</p>
      </div>
    );
  }

  return (
    <div className={styles.avatarContainer} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}
export default Avatar;
