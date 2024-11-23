import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TitleIcon from "../assets/svg/appTitleIcon.svg?react";
import HomeIcon from "../assets/svg/homeIcon.svg?react";
import SearchIcon from "../assets/svg/searchIcon.svg?react";
import ExploreRoundedIcon from "../assets/svg/exploreRoundedIcon.svg?react";
import ReelsIcon from "../assets/svg/reelsIcon.svg?react";
import MessageIcon from "../assets/svg/msgIcon.svg?react";
import NotificationsIcon from "../assets/svg/notificationsIcon.svg?react";
import CreateIcon from "../assets/svg/createIcon.svg?react";
import ProfileIcon from "@mui/icons-material/AccountCircle"; //TBD put logged in user profile pic
import SettingsIcon from "../assets/svg/settingsIcon.svg?react";

export function SideNav() {
    const loggedInUser = "username";

  return (
    <nav className="side-nav">
      <div className="logo">
      <h1 className="logo-txt">InstaMode</h1> 
      </div>

      <div className="nav-items">
        <List
          className="nav-bar"
          sx={{ position: "fixed", width: "300px", height: "100%", bgcolor: "background.paper", }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          
          <ListItemButton component={Link} to="/instamode/homepage">
            <ListItemIcon>
              <HomeIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <SearchIcon className="side-nav-icon search-icon" />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ExploreRoundedIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ReelsIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Reels" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <MessageIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <CreateIcon className="side-nav-icon" />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
 
          <ListItemButton component={Link} to={`/instamode/${loggedInUser}`}>  {/* Navigate to the logged-in user's profile */}
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
      </div>
      <div className="more-settings">
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon className="side-nav-icon more-icon" />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItemButton>
      </div>
    </nav>
  );
}