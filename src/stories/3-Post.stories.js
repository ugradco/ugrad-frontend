import React from "react";
import Post from "../Components/Post/index";
import GlobalStyles from "../Constants/color.constants";

export default {
  title: "Post",
};

const user = { name: "Furkan", department: "EEE/CS" };

export const PostTrial = () => (
  <>
    <GlobalStyles /> <Post favorite_count={12} text="Merhaba arkadaslar! Hava uzucu." user={user} />
  </>
);
