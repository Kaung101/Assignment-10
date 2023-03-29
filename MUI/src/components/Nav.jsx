import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ backgroundColor:"black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>Home</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>About</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>Contact</Button>
          <Button color="inherit" sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}> <MenuIcon/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
