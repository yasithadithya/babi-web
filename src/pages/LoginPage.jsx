import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'communication'|| password === 'Communication' || password === 'COMMUNICATION') {
      setError('');
      navigate('/home');
    } else {
      setError('Wrong secret word, try again babyyy 🥺💔');
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: 'linear-gradient(135deg, #ffe4ec 0%, #fff0f6 100%)',
        fontFamily: "'Quicksand', sans-serif",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          borderRadius: '20px',
          backgroundColor: '#fff',
          width: '350px',
          boxShadow: '0 8px 24px rgba(255, 105, 180, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#db0073',
            textAlign: 'center',
            fontFamily: "'Pacifico', cursive",
            mb: 2,
          }}
        >
          Welcome to Babi World 💖
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Enter the Secret Word"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 1.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
              },
            }}
          />
          <Typography variant="body2" color="text.secondary" mb={2} sx={{ fontStyle: 'italic' }}>
            Hint: It is the key 🗝️
          </Typography>

          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#db0073',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#c40067',
              },
            }}
          >
            Enter
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage;
