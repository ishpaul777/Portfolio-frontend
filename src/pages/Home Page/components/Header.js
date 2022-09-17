/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, AppBar, Container, Toolbar, Typography,
  ListItemText, ListItemButton, ListItem, List, SwipeableDrawer, Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import menuIcon from './assets/menu-icon.png';

const Header = (props) => {
  const { data } = props;
  const { logoImage, logoText } = data;

  const pages = ['About', 'Blogs', 'Contact'];
  //   ?----mobile menu logic ---
  const [menuToggle, setMenuToggle] = React.useState(false);
  const toggleDrawer = (event) => {
    if (
      event
        && event.type === 'keydown'
        && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMenuToggle(!menuToggle);
  };
  const links = () => (
    <Box
      sx={{ height: 'fit-content' }}
      role="presentation"
      onClick={(event) => toggleDrawer(event)}
      onKeyDown={(event) => toggleDrawer(event)}
    >
      <List>
        <Box
          onClick={(event) => toggleDrawer(event)}
          sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}
        >
          <CloseIcon sx={{ p: 1, pr: 3 }} />
        </Box>
        {pages.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box textAlign="center" sx={{ mt: 1 }}>
          <Button color="primary" size="large" variant="contained"> View Work </Button>
        </Box>
      </List>
    </Box>
  );
  //   !------!mobile menu logic endss ---
  //   ?------ Full Nav bar ---
  return (
    <AppBar position="static" elevation={0} sx={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* logo on Nav */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              // ml: 3,
              fontWeight: 600,
              color: 'primary.main',
              textDecoration: 'none',
              // display: { xs: 'none', md: 'flex' },
            }}
          >
            {logoText}
          </Typography>

          {/* Toggle icon for mobile */}
          <Box
            onClick={(event) => toggleDrawer(event)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <img src={menuIcon} alt="menu" style={{ width: '1.5rem' }} />
          </Box>

          {/* Toggle Drawer for mobile */}
          <SwipeableDrawer
            sx={{ display: { xs: 'flex', md: 'none' } }}
            anchor="top"
            open={menuToggle}
            onClose={(event) => toggleDrawer(event)}
            onOpen={(event) => toggleDrawer(event)}
          >
            {links()}
          </SwipeableDrawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
