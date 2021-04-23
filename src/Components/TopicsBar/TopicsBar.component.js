import React from "react";

import styles from "./TopicsBar.module.css";
import Topic from "../Topic/Topic.component";

// eslint-disable-next-line no-unused-vars
function TopicsBarComponent({ children, tags }) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Followed Topics</h1>
      {tags.tags.map((tag) => {
        return (
          <Topic key={tag.name} className={styles.topic}>
            {tag.name}
          </Topic>
        );
      })}
    </nav>
  );
}

export default TopicsBarComponent;
