import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Groups2Icon from '@mui/icons-material/Groups2';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({ mode, setMode }) => {
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#pages">
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#groups">
                <ListItemIcon>
                  <Groups2Icon />
                </ListItemIcon>
                <ListItemText primary="Groups" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <AddBusinessIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" primaryTypographyProps={{ fontFamily: "'Merriweather', serif" }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <DarkModeIcon />
                </ListItemIcon>
                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
