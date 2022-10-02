/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, AppBar, Container, Toolbar, Typography,
  ListItemText, ListItemButton, ListItem, List, SwipeableDrawer, Button,
} from '@mui/material';
// import { motion, Variants } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Navlinks from './Navlinks_desktop';
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
      sx={{ height: 'fit-content', maxWidth: '100vw' }}
      role="presentation"
      onClick={(event) => toggleDrawer(event)}
      onKeyDown={(event) => toggleDrawer(event)}
    >
      <List>
        <Box
          onClick={(event) => toggleDrawer(event)}
          sx={{ display: { xs: 'flex', md: 'none' }, alignnItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              p: 2,
              fontWeight: 600,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            {logoText}
          </Typography>
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
          <Button color="primary" size="large" variant="contained" sx={{ borderRadius: '8px' }}> View Work </Button>
        </Box>
      </List>
    </Box>
  );
  //   !------!mobile menu logic endss ---
  //   ?------ Full Nav bar ---
  return (
    <AppBar position="static" elevation={0} sx={{ background: 'transparent', padding: '.8rem' }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={logoImage} alt="menu" style={{ width: '6rem' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                // display: { xs: 'none', sm: 'inline' },
                fontWeight: 600,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              {logoText}
            </Typography>
          </Box>
          <Navlinks />

          {/* Toggle icon for mobile */}
          <Box
            onClick={(event) => toggleDrawer(event)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <img src={menuIcon} alt="menu" style={{ width: '1.5rem' }} />

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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
