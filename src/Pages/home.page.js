import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeComponent from "../Components/Home/Home.component";
import { REQUEST_STATUS } from "../Constants/global.constants";
import { apiGenerator } from "../Utils";
import { API_ENDPOINTS } from "../Constants/api.constants";
import { getFeedAPI } from "../Actions/Post.actions";

function HomePage(props) {
  const { account, post, getFeedAPI, history } = props;
  const [comment, commentSet] = React.useState("");
  const [text, textSet] = React.useState("Merhaba arkadaslar! Hava uzucu.");
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
      isPublic,
      text: post,
      tags,
    })
      .then((response) => {
        if (!response.ok) {
          // TODO
          console.error("Posting request failed.");
        }
        // TODO: return success,i.e. alertSuccess();
        console.log("successfully send");
      })
      .catch((error) => {
        console.error("There has been a problem with your posting operation:", error);
      });
  };

  // const handleRegister = (e) => {
  //   if (form.email === "") {
  //     alert("Email is required!");
  //   } else {
  //     console.log("handleRegister", form.email);
  //     sendEmail();
  //     e.preventDefault();
  //     // const errs = validate();
  //     // setErrors(errs);
  //     setIsSubmitting(true);
  //   }
  // };
  //

  const handleNewPost = (e) => {
    if (text === "") {
      alert("Please add something to your post.");
    } else {
      sendPost();
      e.preventDefault();
    }
  };

  return (
    <div>
      <HomeComponent user={user} feedCTX={post.feedCTX} onPostAction={handleNewPost} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
  post: state.post,
});

const actionCreators = {
  getFeedAPI,
};

export default connect(mapStateToProps, actionCreators)(HomePage);
