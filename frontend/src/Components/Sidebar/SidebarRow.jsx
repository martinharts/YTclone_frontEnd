import React from "react";
import "./SidebarRow.css";

const SideBarRow = ({ Icon, title }) => {
  return (
    <div className="sidebarRow">
      <Icon className="sidebar__icon" />
      <h3 className="sidebar__title">{title}</h3>
    </div>
  );
};

export default SideBarRow;
