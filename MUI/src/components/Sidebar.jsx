import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import PortraitIcon from '@mui/icons-material/Portrait';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemText from '@mui/material/ListItemText';
const Sidebar = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='flex-end' >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="HomePage" />
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <StorefrontIcon/>
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <PortraitIcon/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
