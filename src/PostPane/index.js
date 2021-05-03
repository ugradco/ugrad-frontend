import React from "react";
import styles from "./style.module.css";
import Photo from "../Components/Photo";
import Input from "../Components/InputBox/Input.component";
import IconButton from "../Components/Button/icon";
import { Close } from "../Components/icons";
import Topic from "../Components/Topic/Topic.component";

function PostPane({
  user,
  tags,
  onModalClose,
  inputType,
  inputPlaceHolder,
  inputValue,
  onInputChange,
  onKeyPress,
  handleTagChange,
}) {
  const [isText, setIsText] = React.useState(true);

  const onNext = () => {
    setIsText(false);
  };
  return (
    <div className={styles.overlay}>
      {isText ? (
        <div className={styles.post}>
          <div className={styles.avatar}>
            <Photo />
            <div className={styles.header}>
              <span className={styles.name}>{user && user.name}</span>{" "}
              <span className={styles.shortBio}>{user && user.shortBio}</span>
            </div>
            <IconButton className={styles.closeButton} onClick={onModalClose}>
              <Close color="#FFFFFF" />
            </IconButton>
          </div>
          <div className={styles.input}>
            <div />
            <Input
              style={styles.inputLarge}
              name={inputType}
              type={inputType}
              placeholder={inputPlaceHolder}
              value={inputValue}
              onChange={onInputChange}
            />
            <div />
          </div>
          <IconButton className={styles.closeButton} onClick={onNext}>
            <span color="#FFFFFFF">Post</span>
          </IconButton>
        </div>
      ) : (
        <div className={styles.post}>
          <div className={styles.avatar}>
            <Photo />
            <div className={styles.header}>
              <span className={styles.name}>{user && user.name}</span>{" "}
              <span className={styles.shortBio}>{user && user.shortBio}</span>
            </div>
            <IconButton className={styles.closeButton} onClick={onModalClose}>
              <Close color="#FFFFFF" />
            </IconButton>
          </div>
          <div className={styles.input}>
            <div />
            <div className={styles.tags}>
              {tags &&
                tags.tags.map((tag) => {
                  return (
                    <Topic className={styles.topic} onClick={handleTagChange} value={tag.name}>
                      {tag.name}
                    </Topic>
                  );
                })}
            </div>
            <div />
          </div>
          <IconButton className={styles.closeButton} onClick={onKeyPress}>
            <span color="#FFFFFFF">Post</span>
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default PostPane;
