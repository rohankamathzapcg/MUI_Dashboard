import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import { Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.mode === "light" ? "#196928" : theme.palette.background.default,
}))

const StyledSearch = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "white" : theme.palette.grey[800],
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" }, fontFamily: `'Merriweather', serif` }}>Dashboard</Typography>
          <LogoDevIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <StyledSearch><InputBase sx={{ fontFamily: `'Merriweather', serif` }} placeholder='Search...' /></StyledSearch>
          <IconContainer>
            <Badge badgeContent={1} color="error" sx={{ cursor: 'pointer' }}>
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error" sx={{ cursor: 'pointer' }}>
              <Notifications />
            </Badge>
            <Avatar src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" sx={{ width: 30, height: 30, cursor: 'pointer' }} onClick={(e) => setOpen(true)} />
          </IconContainer>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" sx={{ width: 30, height: 30, cursor: 'pointer' }} />
            <Typography variant='span' pr={1}>John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar
