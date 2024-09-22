import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export function SideNav() {
    return (
        <nav className="side-nav">
             <h1 className="logo">InstaMode</h1>
            <List
                className="nav-bar" 
                sx={{ position: 'fixed', width: '300px', height: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ExploreRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PlayCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reels" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
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
                        <MenuIcon />
                    </ListItemIcon>
                    <ListItemText primary="More" />
                </ListItemButton>
              
            </List>
        </nav>
    );
}
