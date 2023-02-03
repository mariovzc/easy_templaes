import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container } from '@mui/system';
import { useState } from 'react';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => {
    setOpen(open);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Easy Docz
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default MyApp;
