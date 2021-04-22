import React from "react";

import styles from "./style.module.css";
import Stack from "../Components/stack";
import Photo from "../Components/Photo";
import Input from "../Components/InputBox/Input.component";

function PostPane({ onModalClose = () => {}, inputType, inputPlaceHolder, inputValue, onInputChange, onKeyPress }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <div>
            <Input
              style={styles.inputLarge}
              name={inputType}
              type={inputType}
              placeholder={inputPlaceHolder}
              value={inputValue}
              onChange={onInputChange}
              onKeyPress={onKeyPress}
            />
          </div>
          <Stack gap={20} className={styles.footer} />
        </div>
      </div>
    </div>
  );
}

export default PostPane;
