import React from "react";
import style from "./Home.module.css";
import Layout from "../Layout/Layout.component";
import Post from "../Post";
import SvgFeed from "../icons/Feed";
import PostModal from "../PostModal/PostModal.component";
import SearchBar from "../SearchBar";

function HomeComponent({ user, feed, onInputChange = () => {} }) {
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
        <Post
          className={style.post}
          favorite_count={120}
          text="Merhaba arkadaslar! Bir sorum var. Lutfen bakin."
          user={user}
          commentVal=""
        />
        <Post
          className={style.post}
          favorite_count={120}
          text="Bir sorum var ama uygun platform bilmiyorum."
          user={user}
          commentVal=""
        />
        {feed.map((post) => {
          return (
            <Post
              favorite_count={12}
              text={post.text}
              user={post.user.alias}
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
