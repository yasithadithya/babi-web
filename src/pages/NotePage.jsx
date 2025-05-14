import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Header from '../components/Header';
import letter from '../assets/letter/letter2.jpg'; // <- make sure this path matches

function NotePage() {
  return (
    <Box
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(135deg, #fff0f6, #ffe4ec)',
        fontFamily: "'Quicksand', sans-serif",
      }}
    >
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#db0073',
            fontFamily: "'Pacifico', cursive",
            mb: 3,
            textAlign: 'center',
            textShadow: '1px 1px 2px #fbb6ce',
          }}
        >
          A Letter from Me to You 💌
        </Typography>

        <Paper
          elevation={8}
          sx={{
            p: 3,
            maxWidth: '700px',
            width: '100%',
            borderRadius: '20px',
            backgroundColor: '#fffafa',
            boxShadow: '0 8px 24px rgba(255, 105, 180, 0.2)',
          }}
        >
          <img
            src={letter}
            alt="Love Letter"
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default NotePage;
