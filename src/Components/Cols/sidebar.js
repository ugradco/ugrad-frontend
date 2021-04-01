import React from "react";
import cn from "classnames";
import styles from "./sidebar.module.css";

function Sidebar({ children }) {
  return <div className={cn(styles.sidebar)} />;
}

export default Sidebar;
