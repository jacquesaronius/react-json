import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Monitoring and Tracking
        </Typography>
        <Button color="inherit">Systems</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;