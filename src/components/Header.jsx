import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/babi_logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home'); // This uses client-side routing
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ minHeight: '128px', pl: 2 }}>
        <img
          src={logo}
          alt="Babi Logo"
          style={{ height: '100px', objectFit: 'contain', cursor: 'pointer' }}
          onClick={handleLogoClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
