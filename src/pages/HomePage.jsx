import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FaHeart, FaMagic, FaStar } from 'react-icons/fa';
import '../styles/HeartAnimation.css';

function HomePage() {
  const [greeting, setGreeting] = useState('');

  // Generate greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning Love! ☀️');
    else if (hour < 17) setGreeting('Good Afternoon Love! 💐');
    else if (hour < 20) setGreeting('Good Evening Love! 🌇');
    else setGreeting('Good Night Baby! 🌙');
  }, []);

  // Floating heart animation
  useEffect(() => {
    const container = document.querySelector('.heart-container');
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${3 + Math.random() * 3}s`;
      heart.style.fontSize = `${12 + Math.random() * 20}px`;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 6000); // Clean up
    };
    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { path: '/note', icon: <FaHeart />, label: 'Letter from Boyfriend' },
    { path: '/moments', icon: <FaMagic />, label: 'Magical Moments' },
    { path: '/babiii', icon: <FaStar />, label: 'Babiiii Universe' },
  ];

  return (
    <Box
      minHeight="100vh"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffe4ec 0%, #ffd6f0 50%, #fff0f6 100%)',
        fontFamily: '"Comic Sans MS", "cursive"',
        p: 0,
      }}
    >
      <Header />
      <div className="heart-container" />

      <Typography
        variant="h3"
        sx={{
          color: '#ff69b4',
          fontFamily: '"Pacifico", cursive',
          textAlign: 'center',
          mb: 2,
          textShadow: '1px 1px 2px #ffb6c1',
        }}
      >
        {greeting}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          flexWrap: 'wrap',
          mt: 15,
        }}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            component={Link}
            to={item.path}
            elevation={6}
            sx={{
              width: '280px',
              height: '200px',
              bgcolor: '#fff0f6',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '16px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 6px 12px rgba(255, 105, 180, 0.2)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 10px 20px rgba(255, 105, 180, 0.5)',
              },
            }}
          >
            <Typography variant="h4" sx={{ color: '#db0073', mb: 1 }}>
              {item.icon}
            </Typography>
            <Typography variant="h6" sx={{ color: '#db0073', textAlign: 'center' }}>
              {item.label}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;
