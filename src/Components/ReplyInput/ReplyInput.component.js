import React, { useRef, useState } from "react";

import { getItemFromLocalStorage } from "Utils/Helpers/storage.helpers";
import styles from "./ReplyInput.module.css";
import Photo from "../Avatar/index";
import ThemeButton from "../ThemeButton/index";
import Input from "../InputBox/Input.component";
import { apiGenerator } from "../../Utils";
import { API_ENDPOINTS } from "../../Constants/api.constants";

function CommentModal({ inputValue, user, isReplied = false, postId, commentId, feedAPI }) {
  const [message, setMessage] = React.useState("");
  const [showReplyModal, setshowReplyModal] = React.useState(false);
  const isPublic = getItemFromLocalStorage("isPublic") ? getItemFromLocalStorage("isPublic") : false;
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const replyAPI = () => {
    resetInputHeight();
    apiGenerator("post")(API_ENDPOINTS.SEND_COMMENT, {
      postId,
      commentId,
      message,
      isPublic,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your reply operation.");
        }
        setshowReplyModal(!showReplyModal);
        feedAPI({});
      })
      .catch((error) => {
        console.error("There has been a problem with your reply operation:", error);
      });
  };

  const onReply = () => {
    setshowReplyModal(!showReplyModal);
    setMessage("");
  };

  const inputRef = useRef(null);
  const [inputHeight, setInputHeight] = useState(20);
  const [inputRadius, setInputRadius] = useState(30);

  const resetInputHeight = () => {
    inputRef.current.style.height = "20px";
    setInputHeight(inputRef.current.scrollHeight);
    inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;

    setInputRadius(inputRef.current.scrollHeight > 30 ? 10 : 30);
  };

  const handleChange = (event) => {
    resetInputHeight();
    onChange(event);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.avatar}>
        <Photo name={user.alias} />
        <div className={styles.header}>
          <span className={styles.name}>{user.alias}</span> <span className={styles.shortBio}>{user.shortBio}</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{inputValue}</div>
        {!isReplied && (
          <ThemeButton className={styles.postButton} onClick={onReply}>
            Reply
          </ThemeButton>
        )}
      </div>
      {showReplyModal && (
        <div className={styles.replyBox} style={{ height: inputHeight + 15, borderRadius: inputRadius }}>
          <Input
            inputRef={inputRef}
            containerClassName={styles.textareaContainer}
            style={styles.textarea}
            name="reply"
            type="reply"
            placeholder="Write a comment reply..."
            value={message}
            onChange={handleChange}
          />
          <ThemeButton className={styles.postButton} onClick={replyAPI}>
            Post
          </ThemeButton>
        </div>
      )}
    </div>
  );
}

export default CommentModal;
