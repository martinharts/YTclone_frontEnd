import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import axios from "axios";
import "./Header.css";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?q=${inputSearch}&key=`)
      .then((response) => setInputSearch(response.data["items"]));
  }, [inputSearch]);

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />

        <img
          className="header__logo"
          src="../../images/logo.png"
          alt="YouTube Logo"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" type="submit" />
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
      </div>
    </div>
  );
};

export default Header;
