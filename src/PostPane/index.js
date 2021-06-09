import React from "react";
import CreatableSelect from "react-select/creatable";
import styles from "./style.module.css";
import Photo from "../Components/Avatar";
import Input from "../Components/InputBox/Input.component";
import IconButton from "../Components/Button/icon";
import { Close } from "../Components/icons";

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
  let tagOptions = [];

  const onNext = () => {
    setIsText(false);
  };

  if (tags) {
    for (let i = 0; i < tags.tags.length; i += 1) {
      tagOptions = [...tagOptions, { value: tags.tags[i].name, label: tags.tags[i].name }];
    }
  }
  return (
    <div className={styles.overlay}>
      {isText ? (
        <div className={styles.post}>
          <div className={styles.avatar}>
            <Photo name={user.alias} />
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
            <Photo name={user.alias} />
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
              <CreatableSelect isMulti onChange={handleTagChange} options={tagOptions} />
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
