import React from 'react';
import { Box, Typography } from '@mui/material';

function NotePage() {
  return (
    <Box bgcolor="#ffe4ec" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <Typography variant="h5" color="#db0073" mb={2}>A Letter from Me to You 💌</Typography>
      <img src="/images/love-note.png" alt="Love Note" style={{ maxWidth: '100%', borderRadius: '12px' }} />
    </Box>
  );
}

export default NotePage;