import React from "react";

import styles from "./PostModal.module.css";
import Input from "../InputBox/Input.component";
import PostPane from "../../PostPane";
import Post from "../Post";

function PostModal({
  user,
  tags,
  inputValue,
  inputType,
  inputPlaceHolder,
  onInputChange,
  onKeyPress,
  handleTagChange,
}) {
  const [isShowModal, isShowModalSet] = React.useState(false);

  const onModalClose = () => {
    isShowModalSet(false);
  };
  return (
    <div>
      <textarea
        className={styles.inputLarge}
        name={inputType}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        onClick={() => isShowModalSet(true)}
        readOnly
      />
      {isShowModal && (
        <PostPane
          user={user}
          tags={tags}
          onModalClose={onModalClose}
          inputType={inputType}
          inputValue={inputValue}
          onKeyPress={onKeyPress}
          onInputChange={onInputChange}
          handleTagChange={handleTagChange}
        />
      )}
    </div>
  );
}

export default PostModal;
