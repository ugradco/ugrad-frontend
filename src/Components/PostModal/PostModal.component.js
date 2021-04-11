import React from "react";

import styles from "./PostModal.module.css";
import Input from "../InputBox/Input.component";

function PostModal({ inputValue, inputType, inputPlaceHolder, onInputChange }) {
  return (
    <Input
      style={styles.inputLarge}
      name={inputType}
      type={inputType}
      placeholder={inputPlaceHolder}
      value={inputValue}
      onChange={onInputChange}
    />
  );
}

export default PostModal;
