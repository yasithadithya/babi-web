import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'communication') {
      navigate('/home');
    } else {
      alert('Wrong secret word, try again babyyy 🥺💔');
    }
  };

  return (
    <Box minHeight="100vh" bgcolor="#ffe4ec" display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={6} sx={{ padding: 4, backgroundColor: '#fff0f6' }}>
        <Typography variant="h5" color="#db0073" mb={3} textAlign="center">
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
            sx={{ mb: 3 }}
          />
          <Button fullWidth type="submit" variant="contained" sx={{ backgroundColor: '#db0073', color: 'white' }}>
            Enter
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default LoginPage;
