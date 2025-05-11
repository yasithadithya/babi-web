// src/pages/BabiiiPage.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function BabiiiPage() {
  return (
    <Box bgcolor="#ffe4ec" minHeight="100vh" p={3} textAlign="center">
      <Typography variant="h4" color="#db0073" mb={3}>BABIIII 💕</Typography>
      <Typography variant="body1">Here’s where all your adorable pictures and chaos live 😘</Typography>
      <img src="/images/funny-babi.jpg" alt="Babi being silly" style={{ maxWidth: '100%', marginTop: '20px', borderRadius: '12px' }} />
    </Box>
  );
}

export default BabiiiPage;
