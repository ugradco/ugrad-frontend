import React from "react";

import styles from "./TopicsBar.module.css";
import Topic from "../Topic/Topic.component";
import ThemeButton from "Components/ThemeButton";

// eslint-disable-next-line no-unused-vars
function TopicsBarComponent({ children, tags }) {
  return (
    <div className={styles.nav}>
      <h1 className={styles.title}>Followed Topics</h1>
      {tags &&
        tags.tags.map((tag) => {
          return (
            <Topic key={tag.name} className={styles.topic}>
              {tag.name.toUpperCase()}
            </Topic>
          );
        })}
      <ThemeButton className={styles.newTopicsButton} >Follow New Topics</ThemeButton>
    </div>
  );
}

export default TopicsBarComponent;
