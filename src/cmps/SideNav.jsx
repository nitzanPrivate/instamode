import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import sideMenuIcons from '../assets/svg/sideMenuIcons';
// import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MessageIcon from '@mui/icons-material/Message';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export function SideNav() {
    return (
        <nav className="side-nav">
            <List
                className="nav-bar" 
                sx={{ position: 'fixed', width: '300px', height: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/* Logo List Item */}
                <ListItemButton component={Link} to="/instamode/homepage">
                    <ListItemIcon>
                    <img src="/img/instamode_logo.svg" style={{ width: '24px', height: '24px' }} />
                    </ListItemIcon>
                    {/* <ListItemText primary="InstaMode" /> */}
                </ListItemButton>

                <ListItemButton component={Link} to="/instamode/homepage">
                    <ListItemIcon>
                        <img src={sideMenuIcons.homeIcon} alt="Home" className="side-nav-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.searchIcon} alt="Search" className="side-nav-icon search-icon" />
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.exploreIcon} alt="Explore" className="side-nav-icon" />
                        <ExploreRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.reelsIcon} alt="Reels" className="side-nav-icon"/>
                        <PlayCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reels" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.messagesIcon} alt="Messages" className="side-nav-icon" />
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.notificationsIcon} alt="Notifications" className="side-nav-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.createIcon} alt="Create" className="side-nav-icon" />
                        <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create" />
                </ListItemButton>

                <ListItemButton component={Link} to="/instamode/profile"> 
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <img src={sideMenuIcons.moreIcon} alt="More" className="side-nav-icon more-icon" />
                        <MenuIcon />
                    </ListItemIcon>
                    <ListItemText primary="More" />
                </ListItemButton>
            </List>
        </nav>
    );
}
