import React from "react";
import { REQUEST_STATUS } from "Constants/global.constants";
import style from "./Home.module.css";
import MainLayout from "../Layout/MainLayout.component";
import Post from "../Post";
import PostModal from "../PostModal/PostModal.component";
import SearchBar from "../SearchBar";
import Loading from "../loading";
import { apiGenerator } from "../../Utils";
import { API_ENDPOINTS } from "../../Constants/api.constants";

function HomeComponent({
  user,
  tags,
  isPublic,
  feedCTX,
  onInputChange = () => {},
  onKeyPress = () => {},
  onPrivacyChange,
  feedAPI,
  handleTagChange,
  handleEditProfileName,
  handleEditProfileBio,
}) {
  const feed = feedCTX.data;

  const upvoteAPI = (postId, upSelected) => {
    apiGenerator("post")(API_ENDPOINTS.UPVOTE(postId), {
      postId,
      upvote: upSelected,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your vote operation.");
        }
        console.log("Successfully upvoted.");
        feedAPI({});

      })
      .catch((error) => {
        console.error("There has been a problem with your vote operation:", error);
      });
  };

  const sendComment = (postId, message) => {
    apiGenerator("post")(API_ENDPOINTS.SEND_COMMENT, {
      postId,
      message,
      isPublic,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your comment operation.");
        }
        console.log("Successfully upvoted.");
        feedAPI({});
      })
      .catch((error) => {
        console.error("There has been a problem with your comment operation:", error);
      });
  };

  if (feedCTX.status === REQUEST_STATUS.PENDING) {
    <Loading />;
  }
  return (
    <MainLayout
      user={user}
      tags={tags}
      className={style.layout}
      onPrivacyChange={onPrivacyChange}
      handleEditProfileName={handleEditProfileName}
      handleEditProfileBio={handleEditProfileBio}
    >
      <div>
        <SearchBar />
      </div>

      <div className={style.post}>
        <div className={style.text}>New Post</div>
        <PostModal
          tags={tags}
          user={user}
          onInputChange={onInputChange}
          onKeyPress={onKeyPress}
          inputPlaceHolder={user ? `What's on your mind, ${user.name}?` : "What's on your mind?"}
          handleTagChange={handleTagChange}
        />
      </div>
      <div className={style.section}>Feed</div>

      <div className={style.feed}>
        {feed &&
          feed.map((post) => {
            const [upSelected, upSelectedSet] = React.useState(post.upvoted);
            const [message, setMessage] = React.useState("");
            const upClicked = () => {
              upSelectedSet(!upSelected);
              upvoteAPI(post._id, upSelected);
            };

            const onCommentChange = (e) => {
              setMessage(e.target.value);
            };

            const sendCommentClicked = (e) => {
              sendComment(post._id, message);
              setMessage("");
              
            };

            return (
              <Post
                key={post._id}
                upCount={post.upvoteCount}
                checked={upSelected}
                upClicked={upClicked}
                text={post.text}
                user={post.user}
                comments={post.comments}
                sendComment={sendCommentClicked}
                inputValue={message}
                onCommentChange={onCommentChange}
                {...post}
              />
            );
          })}
      </div>
    </MainLayout>
  );
}

export default HomeComponent;
