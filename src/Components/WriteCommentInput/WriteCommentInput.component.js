import React, { useRef, useState } from "react";

import styles from "./WriteCommentInput.module.css";
import Photo from "../Avatar/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";

function WriteCommentInput({
  user,
  isUserPublic,
  inputType,
  inputValue,
  placeholder,
  onInputChange = () => {},
  onSubmit = () => {},
}) {
  const activeUserName = user && (isUserPublic ? user.name : user.alias);

  const inputRef = useRef(null);
  const [inputHeight, setInputHeight] = useState(20);
  const [inputRadius, setInputRadius] = useState(30);

  const resetInputHeight = () => {
    inputRef.current.style.height = "20px";
    setInputHeight(inputRef.current.scrollHeight);
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;

    setInputRadius(inputRef.current.scrollHeight > 30 ? 10 : 30);
  };

  const onChange = (event) => {
    resetInputHeight();
    onInputChange(event);
  };

  const handleSubmit = () => {
    resetInputHeight();
    onSubmit();
  };

  if (inputType === "new") {
    return (
      <div className={styles.comments}>
        <div className={styles.modal}>
          <div className={styles.avatar}>
            <Photo name={activeUserName} />
          </div>
          <div className={styles.commentBox} style={{ height: inputHeight + 20, borderRadius: inputRadius }}>
            <Input
              inputRef={inputRef}
              containerClassName={styles.textareaContainer}
              style={styles.textarea}
              styleOverride={{ height: inputHeight }}
              name={inputType}
              type={inputType}
              placeholder={placeholder}
              value={inputValue}
              onChange={onChange}
            />
            <ThemeButton className={styles.postButton} onClick={handleSubmit}>
              Post
            </ThemeButton>
          </div>
        </div>
      </div>
    );
  }
}

export default WriteCommentInput;
