import React from "react";
import styles from "./TopicsBar.module.css";
import Topic from "../Topic/Topic.component";

// eslint-disable-next-line no-unused-vars
function TopicsBarComponent({ children, style, tags, history }) {
  return (
    <div className={style}>
      <div className={styles.nav}>
        <h1 className={styles.title}>Popular Topics</h1>
        {tags &&
          tags.tags.map((tag) => {
            const onClick = () => {
              history.push({
                path: "/",
                search: `tags[]=${tag.name}`,
              });
            };
            return (
              <Topic key={tag.name} className={styles.topic} onClick={onClick}>
                {tag.name.toUpperCase()}
              </Topic>
            );
          })}
      </div>
    </div>
  );
}

export default TopicsBarComponent;
