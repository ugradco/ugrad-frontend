import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { saveItemToLocalStorage, removeItemFromLocalStorage } from "Utils/Helpers/storage.helpers";
import HomeComponent from "../Components/Home/Home.component";
import { REQUEST_STATUS } from "../Constants/global.constants";
import { getFeedAPI } from "../Actions/Post.actions";
import { getUserAPI } from "../Actions/User.actions";
import { getTagsAPI } from "../Actions/Tags.actions";
import { apiGenerator } from "../Utils";
import { API_ENDPOINTS } from "../Constants/api.constants";

function HomePage(props) {
  const { post, user, tags, getFeedAPI, getUserAPI, getTagsAPI, history, location } = props;
  const [form, setForm] = useState({ isPublic: false, text: "", tags: [] });
  const [isPublic, isPublicSet] = React.useState(false);
  const [tagSelected, tagSelectedSet] = React.useState("");

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

  useEffect(() => {
    if (location.search !== "") {
      console.log(location.search.substring(8));
      getFeedAPI({ params: { tags: location.search.substring(8) } });
    }
  }, [location.search]);

  const sendPost = () => {
    console.log(form);
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

  const editUserName = (value) => {
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user.userCTX.user._id), {
      name: value,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your patch operation.");
        }
        getUserAPI();
      })
      .catch((error) => {
        console.error("There has been a problem with your patch operation:", error);
      });
  };

  const editshortBio = (value) => {
    apiGenerator("patch")(API_ENDPOINTS.UPDATE(user.userCTX.user._id), {
      shortBio: value,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("There has been a problem with your patch operation.");
        }
        getUserAPI();
      })
      .catch((error) => {
        console.error("There has been a problem with your patch operation:", error);
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

  const handleEditProfileName = (value) => {
    editUserName(value);
  };

  const handleEditProfileBio = (value) => {
    editshortBio(value);
  };

  const handleTagChange = (newValue, actionMeta) => {
    // console.group("Value Changed");
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
    let tagOptions = [];
    for (let i = 0; i < newValue.length; i += 1) {
      tagOptions = [...tagOptions, newValue[i].value];
    }
    setForm({
      isPublic: form.isPublic,
      text: form.text,
      tags: tagOptions,
    });
  };
  const onPrivacyChange = () => {
    isPublicSet(!isPublic);
    removeItemFromLocalStorage("isPublic");
    saveItemToLocalStorage("isPublic", !isPublic);
  };

  return (
    <div>
      <HomeComponent
        user={user.userCTX.user}
        tags={tags.tagsCTX.tags}
        isPublic={isPublic}
        feedCTX={post.feedCTX}
        onInputChange={handleChange}
        onKeyPress={onKeyPress}
        onPrivacyChange={onPrivacyChange}
        feedAPI={getFeedAPI}
        handleTagChange={handleTagChange}
        handleEditProfileName={handleEditProfileName}
        handleEditProfileBio={handleEditProfileBio}
        history={history}
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
