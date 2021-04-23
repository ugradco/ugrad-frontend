import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HomeComponent from "../Components/Home/Home.component";
import { REQUEST_STATUS } from "../Constants/global.constants";
import { getFeedAPI } from "../Actions/Post.actions";
import { getUserAPI } from "../Actions/User.actions";
import { getTagsAPI } from "../Actions/Tags.actions";
import { apiGenerator } from "../Utils";
import { API_ENDPOINTS } from "../Constants/api.constants";

function HomePage(props) {
  const { post, user, tags, getFeedAPI, getUserAPI, getTagsAPI, history } = props;
  const [form, setForm] = useState({ isPublic: false, text: "", tags: [] });
  const [comment, commentSet] = React.useState("");
  const [text, textSet] = React.useState("");
  // const [user, userSet] = React.useState({ name: "Furkan Şahbaz", department: "EEE/CS" });
  const [postContent, postContentSet] = React.useState("");
  const [isPublic, isPublicSet] = React.useState(false);
  // const [tags, tagsSet] = React.useState([]);

  useEffect(() => {
    if (post.feedCTX.status === REQUEST_STATUS.NOT_DEFINED) {
      getFeedAPI({});
    }
    if (user.userCTX.status === REQUEST_STATUS.NOT_DEFINED) {
      getUserAPI();
    }
    if (tags.tagsCTX.status === REQUEST_STATUS.NOT_DEFINED) {
      getTagsAPI();
    }
  }, [post.feedCTX.status, user.userCTX.status, tags.tagsCTX.status]);

  const sendPost = () => {
    apiGenerator("post")(API_ENDPOINTS.SEND_POST, {
      isPublic: form.isPublic,
      text: form.text,
      tags: form.tags,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your fetch operation.");
        }
        console.log("Successfully posted.");
        console.log("text", form.text);
        window.location.reload();
        // TODO: PostAPI ile baglanacak.
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };

  const onKeyPress = () => {
    sendPost();
  };

  const handleChange = (e) => {
    setForm({
      isPublic,
      text: e.target.value,
      tags: [],
    });
  };

  const handleTagChange = (e) => {
    setForm({
      isPublic: form.isPublic,
      text: form.text,
      tags: [...form.tags, e.target.value],
    });
    console.log(form);
  };
  const onPrivacyChange = () => {
    isPublicSet(!isPublic);
    console.log("set publicity", isPublic);
  };

  return (
    <div>
      <HomeComponent
        user={user.userCTX.user}
        tags={tags.tagsCTX.tags}
        feedCTX={post.feedCTX}
        onInputChange={handleChange}
        onKeyPress={onKeyPress}
        onPrivacyChange={onPrivacyChange}
        feedAPI={getFeedAPI}
        handleTagChange={handleTagChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  post: state.post,
  user: state.user,
  tags: state.tags,
});

const actionCreators = {
  getFeedAPI,
  getUserAPI,
  getTagsAPI,
};

export default connect(mapStateToProps, actionCreators)(HomePage);
