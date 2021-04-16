import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HomeComponent from "../Components/Home/Home.component";
import { REQUEST_STATUS } from "../Constants/global.constants";
import { getFeedAPI, createPostAPI } from "../Actions/Post.actions";
import { apiGenerator } from "../Utils";
import { API_ENDPOINTS } from "../Constants/api.constants";
import Post from "../Components/Post";

function HomePage(props) {
  const { account, post, getFeedAPI, createPostAPI, history } = props;
  const [form, setForm] = useState({ isPublic: false, text: "", tags: [] });
  const [comment, commentSet] = React.useState("");
  const [text, textSet] = React.useState("");
  const [user, userSet] = React.useState({ name: "Furkan Şahbaz", department: "EEE/CS" });
  const [postContent, postContentSet] = React.useState("");
  const [isPublic, isPublicSet] = React.useState(false);
  const [tags, tagsSet] = React.useState([]);

  const user2 = account.account;

  useEffect(() => {
    if (post.feedCTX.status === REQUEST_STATUS.NOT_DEFINED) {
      getFeedAPI({});
    }
  }, [post.feedCTX.status]);

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
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };

  const getUser = () => {
    apiGenerator("get")(API_ENDPOINTS.ACCOUNT, {
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
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      sendPost();
    }
  };

  const handleChange = (e) => {
    setForm({
      isPublic: true,
      text: e.target.value,
      tags: [],
    });
  };

  return (
    <div>
      <HomeComponent user={user} feedCTX={post.feedCTX} onInputChange={handleChange} onKeyPress={onKeyPress} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
  post: state.post,
});

const actionCreators = {
  getFeedAPI,
  createPostAPI,
};

export default connect(mapStateToProps, actionCreators)(HomePage);
