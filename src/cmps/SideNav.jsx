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
                    <NavLink
                        to={'/instamode/homepage'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <HomeIcon className="side-nav-icon" />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/instamode/search'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <SearchIcon className="side-nav-icon search-icon" />
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/instamode/explore'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <ExploreRoundedIcon className="side-nav-icon" />
                        Explore
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/instamode/messages'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <MessageIcon className="side-nav-icon" />
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/instamode/notifications'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <NotificationsIcon className="side-nav-icon" />
                        Notifications
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/instamode/create'}
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        <CreateIcon className="side-nav-icon" />
                        Create
                    </NavLink>
                </li>
                {loggedInUser && ( // Ensure loggedInUser is not null before rendering the profile link
                    <li className="profile-item">
                        <NavLink
                            to={`/instamode/${loggedInUser.username}`}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            <img
                                src={loggedInUser.imgUrl}
                                alt={`${loggedInUser.username} profile`}
                                className="profile-icon"
                            />
                            Profile
                        </NavLink>
                    </li>
                )}
            </ul>

            <div className="more-settings">
                <NavLink
                    to={'/instamode/settings'}
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    <SettingsIcon className="side-nav-icon more-icon" />
                    More
                </NavLink>
            </div>
        </nav>
    );
}
