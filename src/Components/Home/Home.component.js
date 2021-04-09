import React from "react";
import style from "./Home.module.css";
import Layout from "../Layout/Layout.component";
import Post from "../Post";
import SvgFeed from "../icons/Feed";
import PostModal from "../PostModal/PostModal.component";
import SearchBar from "../SearchBar";

function HomeComponent({ user, textVal, commentVal }) {
  return (
    <Layout user={user} type="main" className={style.layout}>
      <div>
        <SearchBar />
      </div>

      <div className={style.post}>
        <div className={style.text}>New Post</div>
        <PostModal inputPlaceHolder="What's poppin?" />
      </div>
      <div className={style.section}>
        <SvgFeed />
        Feed
      </div>

      <div className={style.feed}>
        {/*     {data.map((post) => {
          return <Post  favorite_count={post.favorite_count} text={post.textVal} user={post.user} commentVal={post.commentVal}{...post} />
        })} */}
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
        <Post className={style.post} favorite_count={120} text={textVal} user={user} commentVal={commentVal} />
      </div>
    </Layout>
  );
}

export default HomeComponent;
