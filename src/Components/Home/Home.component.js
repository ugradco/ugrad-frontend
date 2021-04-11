import React from "react";
import { REQUEST_STATUS } from "Constants/global.constants";
import style from "./Home.module.css";
import Layout from "../Layout/Layout.component";
import Post from "../Post";
import SvgFeed from "../icons/Feed";
import PostModal from "../PostModal/PostModal.component";
import SearchBar from "../SearchBar";

function HomeComponent({ user, feedCTX, onInputChange = () => {} }) {
  const feed = feedCTX.data;

  if (feedCTX.status === REQUEST_STATUS.PENDING) {
    // TODO show loading
  }

  return (
    <Layout user={user} type="main" className={style.layout}>
      <div>
        <SearchBar />
      </div>

      <div className={style.post}>
        <div className={style.text}>New Post</div>
        <PostModal onInputChange={onInputChange} inputPlaceHolder="What's on your mind?" />
      </div>
      <div className={style.section}>
        <SvgFeed />
        Feed
      </div>

      <div className={style.feed}>
        {feed &&
          feed.map((post) => {
            return (
              <Post
                favorite_count={12}
                text={post.text}
                user={post.user}
                commentVal="dummy comment for now"
                {...post}
              />
            );
          })}
      </div>
    </Layout>
  );
}

export default HomeComponent;
