import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';

export default function EnabledModules() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Modelos disponibles
            </ListSubheader>
          }
        >
          <ListItem disablePadding>
            <ListItemButton component="a" href="/resignation">
              <ListItemText primary="Carta de renuncia" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Modelo 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
