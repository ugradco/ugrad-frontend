import React from "react";
import CreatableSelect from "react-select/creatable";
import Input from "Components/InputBox/Input.component";
import Button from "Components/Button/Button.component";
import IconButton from "Components/Button/icon";
import { Close } from "Components/icons";
import Avatar from "Components/Avatar";

import styles from "./style.module.css";

function PostModal({
  user,
  isPublic,
  tags,
  onModalClose,
  inputType,
  inputValue,
  onInputChange,
  onKeyPress,
  handleTagChange,
}) {
  const activeUserName = user && (isPublic ? user.name : user.alias);

  const [isText, setIsText] = React.useState(true);
  let tagOptions = [];

  const onNext = () => {
    if (inputValue === "") {
      return;
    }
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
            <Avatar name={activeUserName} />
            <div className={styles.header}>
              <span className={styles.name}>{activeUserName}</span>{" "}
              {isPublic && <span className={styles.shortBio}>{user && user.shortBio}</span>}
            </div>
            <IconButton className={styles.closeButton} onClick={onModalClose}>
              <Close color="#FFFFFF" />
            </IconButton>
          </div>
          <Input
            style={styles.inputLarge}
            name={inputType}
            type={inputType}
            placeholder="What's on your mind?"
            value={inputValue}
            onChange={onInputChange}
          />
          <div>
            <Button className={styles.postButton} onClick={onNext}>
              <span color="#FFFFFFF">Post</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.post}>
          <div className={styles.avatar}>
            <Avatar name={activeUserName} />
            <div className={styles.header}>
              <span className={styles.name}>{activeUserName}</span>{" "}
              {isPublic && <span className={styles.shortBio}>{user && user.shortBio}</span>}
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
          <Button className={styles.postButton} onClick={onKeyPress}>
            <span color="#FFFFFFF">Post</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default PostModal;
