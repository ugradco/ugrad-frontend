import React from "react";

import styles from "./PostModal.module.css";
import Input from "../InputBox/Input.component";
import PostPane from "../../PostPane";

function PostModal({ user, tags, inputValue, inputType, inputPlaceHolder, onInputChange, onKeyPress }) {
  const [isShowModal, isShowModalSet] = React.useState(false);

  const onModalClose = () => {
    isShowModalSet(false);
  };
  return (
    <div>
      <Input
        style={styles.inputLarge}
        name={inputType}
        type={inputType}
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        onClick={() => isShowModalSet(true)}
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
        />
      )}
    </div>
  );
}

export default PostModal;
