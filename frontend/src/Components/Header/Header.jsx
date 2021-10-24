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

  const search = (e) => {
    e.preventDefault();
    setInputSearch(e.target[0].value);
  };
  return (
    <div className="header">
      <div className="headerLeftSide">
        <MenuIcon />

        <img className="logo" src="../../images/logo.png" alt="Logo" />
      </div>

      <div className="headerInput">
        <input type="text" placeholder="Search" />
        <SearchIcon className="headerButton" type="submit" />
      </div>

      <div className="headerRight">
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
