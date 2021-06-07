import React from "react";

import styles from "./style.module.css";

const COLORS = {
  1: "#95CAFB",
};

function Avatar({
  src = "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/vprojectold1-tang-1474_2.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3ad8d7f89ccaa68eb265d67c62a1def0",
  alt,
  size = 47,
  name,
}) {
  if (name) {
    return (
      <div className={styles.avatarContainer} style={{ width: size, height: size, backgroundColor: COLORS[1] }}>
        <p>{name[0]}</p>
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
