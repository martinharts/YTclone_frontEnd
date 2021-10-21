import React from "react";
import "./Sidebar.css";
import SideBarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistroyIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionIcon} title="Subscription" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistroyIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
      <hr />
      <SideBarRow Icon={SettingsIcon} title="Settings" />
      <SideBarRow Icon={FlagIcon} title="Report History" />
      <SideBarRow Icon={HelpIcon} title="Help" />
      <SideBarRow Icon={FeedbackIcon} title="Send feedback" />
      <hr />
    </div>
  );
}

export default SideBar;
