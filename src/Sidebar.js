import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import {
  BookmarkBorder,
  ListAlt,
  MailOutline,
  MoreHoriz,
  PermIdentity,
  Twitter,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutline} text="Mail" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      <Button className="sidebar__tweet" fullWidth variant="outlined">
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
