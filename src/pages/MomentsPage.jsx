// src/pages/MomentsPage.js
import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const photos = [
  { src: '/images/moment1.jpg', desc: 'Our first beach day 🏖️' },
  { src: '/images/moment2.jpg', desc: 'Café chill session ☕' },
  { src: '/images/moment3.jpg', desc: 'Goofy selfies 😜' }
];

function MomentsPage() {
  return (
    <Box bgcolor="#ffe4ec" minHeight="100vh" p={3}>
      <Typography variant="h4" color="#db0073" textAlign="center" mb={4}>Our Moments 📸</Typography>
      <Grid container spacing={3} justifyContent="center">
        {photos.map((photo, idx) => (
          <Grid item key={idx} xs={10} sm={6} md={4}>
            <Paper elevation={4} sx={{ padding: 2, backgroundColor: '#fff0f6', textAlign: 'center' }}>
              <img src={photo.src} alt={photo.desc} style={{ width: '100%', borderRadius: '12px', marginBottom: '10px' }} />
              <Typography>{photo.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MomentsPage;
