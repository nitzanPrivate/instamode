import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/svg/homeIcon.svg?react";
import SearchIcon from "../assets/svg/searchIcon.svg?react";
import ExploreRoundedIcon from "../assets/svg/exploreRoundedIcon.svg?react";
import MessageIcon from "../assets/svg/msgIcon.svg?react";
import NotificationsIcon from "../assets/svg/notificationsIcon.svg?react";
import CreateIcon from "../assets/svg/createIcon.svg?react";
import SettingsIcon from "../assets/svg/settingsIcon.svg?react";
import { useSelector } from 'react-redux';

export function SideNav() {
    const loggedInUser = useSelector(storeState => storeState.userModule.user);

    return (
        <nav className="side-nav">
            <div className="logo">
                <h1 className="logo-txt">InstaMode</h1>
            </div>

            <ul className="nav-bar">
                <li>
                    <NavLink to={'/instamode/homepage'}>
                        <HomeIcon className="side-nav-icon" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/instamode/search'}>
                        <SearchIcon className="side-nav-icon search-icon" />
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/instamode/explore'}>
                        <ExploreRoundedIcon className="side-nav-icon" />
                        Explore
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/instamode/messages'}>
                        <MessageIcon className="side-nav-icon" />
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/instamode/notifications'}>
                        <NotificationsIcon className="side-nav-icon" />
                        Notifications
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/instamode/create'}>
                        <CreateIcon className="side-nav-icon" />
                        Create
                    </NavLink>
                </li>
                <li className="profile-item">
                    <NavLink to={`/instamode/${loggedInUser.username}`}>
                        <img
                            src={loggedInUser.imgUrl}
                            alt={`${loggedInUser.username} profile`}
                            className="profile-icon"
                        />
                        Profile
                    </NavLink>
                </li>
            </ul>

            <div className="more-settings">
                <NavLink to={'/instamode/settings'}>
                    <SettingsIcon className="side-nav-icon more-icon" />
                    More
                </NavLink>
            </div>
        </nav>
    );
}
