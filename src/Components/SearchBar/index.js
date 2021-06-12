import React from "react";
import style from "./style.module.css";
import IconButton from "../Button/icon";
import * as Icon from "../icons";
import Topic from "../Topic/Topic.component";

function SearchBar({ tags, feedAPI }) {
  let tag = "";
  const [searchText, setSearchText] = React.useState("");
  const [showTags, setShowTags] = React.useState(false);

  const selectTag = (newValue) => {
    tag = newValue;
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      feedAPI({ params: { tags: tag, search: searchText } });
      setShowTags(false);
    }
  };

  const onSearchClick = () => {
    feedAPI({ params: { tags: tag, search: searchText } });
    setShowTags(false);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const onClick = () => {
    setShowTags(!showTags);
  };

  return (
    <div className={style.searchBox}>
      <div className={style.searchInputBox}>
        <IconButton className={style.searchButton} onClick={onSearchClick}>
          <Icon.Search />
        </IconButton>
        <input
          className={style.search}
          onClick={onClick}
          onChange={handleChange}
          onKeyPress={onKeyPress}
          type="text"
          id="header-search"
          placeholder="Search anything in UGrad"
          autoComplete="off"
        />
      </div>
      {/* <div className={style.tagsContainer}>
        {showTags && <h1 className={style.topicHeader}>Suggested Topics</h1>}
        <div className={style.tags}>
          {showTags &&
            tags &&
            tags.tags.map((tag) => {
              return (
                <Topic key={tag.name} className={style.topic} onClick={selectTag}>
                  {tag.name.toUpperCase()}
                </Topic>
              );
            })}
        </div>
      </div> */}
    </div>
  );
}
export default SearchBar;
