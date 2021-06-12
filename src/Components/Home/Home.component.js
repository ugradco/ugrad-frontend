import React from "react";
import { REQUEST_STATUS } from "Constants/global.constants";
import InfiniteScroll from "react-infinite-scroll-component";
import style from "./Home.module.css";
import MainLayout from "../Layout/MainLayout.component";
import Post from "../Post";
import PostInput from "../PostInput/PostInput.component";
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
  feedAPI,
  feed,
  handleTagChange,
  nextPage,
  history,
}) {
  const upvoteAPI = (postId, upSelected) => {
    apiGenerator("post")(API_ENDPOINTS.UPVOTE(postId), {
      upvote: upSelected,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your vote operation.");
        }
        feedAPI({});
      })
      .catch((error) => {
        console.error("There has been a problem with your vote operation:", error);
      });
  };

  const reportAPI = (postId) => {
    apiGenerator("post")(API_ENDPOINTS.REPORT, {
      postId,
      reason: "BAD_WORDS",
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your vote operation.");
        }
        feedAPI({});
      })
      .catch((error) => {
        console.error("There has been a problem with your report operation:", error);
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
    <MainLayout user={user} tags={tags} isPublic={isPublic} className={style.layout} history={history}>
      <SearchBar tags={tags} feedAPI={feedAPI} />
      <div className={style.post}>
        <div className={style.text}>New Post</div>
        <PostInput
          tags={tags}
          user={user}
          isPublic={isPublic}
          onInputChange={onInputChange}
          onKeyPress={onKeyPress}
          inputPlaceHolder={user ? `What's on your mind, ${user.name}?` : "What's on your mind?"}
          handleTagChange={handleTagChange}
        />
      </div>
      <div className={style.section}>Feed</div>
      <InfiniteScroll
        dataLength={feed.length}
        next={nextPage}
        hasMore={feedCTX.hasMore}
        loader="Loading..."
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more posts available to see.</b>
          </p>
        }
      >
        <div className={style.feed}>
          {feed &&
            feed.map((post) => {
              return (
                <Post
                  post={post}
                  key={post._id}
                  reportAPI={reportAPI}
                  upvoteAPI={upvoteAPI}
                  text={post.text}
                  user={post.user}
                  isUserPublic={isPublic}
                  registeredUser={user}
                  comments={post.comments}
                  sendComment={sendComment}
                  tags={post.tags}
                  feedAPI={feedAPI}
                  {...post}
                />
              );
            })}
        </div>
      </InfiniteScroll>
    </MainLayout>
  );
}

export default HomeComponent;
