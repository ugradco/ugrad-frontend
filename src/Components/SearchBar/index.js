import React from "react";
import style from "./style.module.css";
import IconButton from "../Button/icon";
import * as Icon from "../icons";

const SearchBar = () => (
  <div className={style.searchBox}>
    <IconButton className={style.searchButton}>
      <Icon.Search />
    </IconButton>
    <input className={style.search} type="text" id="header-search" placeholder="Search in Post and Tags" name="s" />
  </div>
);

export default SearchBar;
