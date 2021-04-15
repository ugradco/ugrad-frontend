import React from "react";
import cn from "classnames";

import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import ThemeButton from "../ThemeButton";
import Photo from "../Photo";
import styles from "./Profile.module.css";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Profile({ user, onSubmit }) {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Photo />
        <div className={styles.header}>
          <span className={styles.name}>{user.name}</span> <span className={styles.name}>{user.department}</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <IOSSwitch />
          Public
        </div>
        <ThemeButton className={styles.signOutButton} onClick={onSubmit}>
          Sign Out
        </ThemeButton>
      </div>
    </div>
  );
}
export default Profile;
