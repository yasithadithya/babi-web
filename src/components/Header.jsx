import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/babi_logo.png'; // Adjust this path based on your project

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ minHeight: '128px', pl: 2 }}>
        <img
          src={logo}
          alt="Babi Logo"
          style={{ height: '100px', objectFit: 'contain' }}
          onClick={() => window.location.href = '/home'} // Redirect to home page
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
