import React from "react";

import styles from "./TopicsBar.module.css";
import Topic from "../Topic/Topic.component";

// eslint-disable-next-line no-unused-vars
function TopicsBarComponent({ children }) {
  const userTopicList = [
    {
      name: "Finals",
    },
    {
      name: "MATH106",
    },
    {
      name: "PHYS102",
    },
  ];

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Followed Topics</h1>
      {userTopicList.map((topic) => {
        return (
          <Topic key={topic.name} className={styles.topic}>
            {topic.name}
          </Topic>
        );
      })}
    </nav>
  );
}

export default TopicsBarComponent;
