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
  const { post, user, tags, getFeedAPI, getUserAPI, getTagsAPI, history, location } = props;
  const [form, setForm] = useState({ isPublic: false, text: "", tags: [] });

  const [currentPage, setCurrentPage] = React.useState(0);
  let feed = [...post.feedCTX.data];

  useEffect(() => {
    if (post.feedCTX.status === REQUEST_STATUS.NOT_DEFINED) {
      getFeedAPI({});
      feed = [...post.feedCTX.data];
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
      getFeedAPI({ params: { tags: location.search.substring(8) } });
    } else {
      getFeedAPI({});
    }
  }, [location.search]);

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
        window.location.reload();
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
      isPublic: user.isPublic,
      text: e.target.value,
      tags: [],
    });
  };

  const handleTagChange = (newValue) => {
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

  const nextPage = () => {
    getFeedAPI({ params: { page: currentPage + 1 }, isLoadMore: true });
    setCurrentPage(currentPage + 1);
    return feed;
  };

  return (
    <div>
      <HomeComponent
        user={user.userCTX.user}
        tags={tags.tagsCTX.tags}
        isPublic={user.isPublic}
        feedCTX={post.feedCTX}
        feed={feed}
        onInputChange={handleChange}
        onKeyPress={onKeyPress}
        feedAPI={getFeedAPI}
        handleTagChange={handleTagChange}
        nextPage={nextPage}
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
