import React from "react";
import cn from "classnames";

import styles from "./Profile.module.css";
import Topic from "../Topic/Topic.component";

function Profile({ name = "Furkan Sahbaz" }) {
  return (
    <Topic className={cn([styles.box])}>
      <>
        <div className={styles.body}> {name} </div>
      </>
    </Topic>
  );
}
export default Profile;
