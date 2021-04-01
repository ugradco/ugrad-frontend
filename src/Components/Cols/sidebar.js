import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.css";
import TopicsBar from "../TopicsBar/TopicsBar.component";
import ProfileBox from "../profile-box";

function Sidebar({ flat }) {
  return <div className={cn(styles.sidebar)}></div>;
}

export default Sidebar;
