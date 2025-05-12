import React, { useState } from 'react';
import { Box, Typography, Modal, Backdrop } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../components/Header';

import img1 from '../assets/moments/2025-02-22 First date.jpg';
import img2 from '../assets/moments/2025-03-05 After office moments (this was taken by Navodya btw).jpg';
import img3 from '../assets/moments/2025-03-15 Me Slaying Babiiis bag.jpg';
import img4 from '../assets/moments/2025-04-06 Had Suncrush without seeing.jpg';
import img5 from '../assets/moments/2025-04-06 Testing snapchat filters.jpg';
import img6 from '../assets/moments/2025-04-17 Babi loves this picture .jpg';
import img7 from '../assets/moments/2025-04-17 Babi visited BK after inflation and Met Ammi.jpg';
import img8 from '../assets/moments/2025-04-17 Yepp... Babi bought this shorts from Gflock Bamba.jpg';
import img9 from '../assets/moments/2025-04-22 Random office selfiesss.jpg';
import img10 from '../assets/moments/2025-04-25 1st train ride together.jpg';
import img11 from '../assets/moments/2025-04-25 DHL Visit Yep... We sang songs loudddd.jpg';
import img12 from '../assets/moments/2025-04-26 Desserts at Jagrooo.jpg';
import img13 from '../assets/moments/2025-04-27 Mount beach... What happened to the trash can...jpg';
import img14 from '../assets/moments/2025-04-29 Model Location.jpg';
import img15 from '../assets/moments/2025-04-30 1st Proper picture together at sliit aurudu.jpg';
import img16 from '../assets/moments/2025-04-30 After Aurudu Shoppings at OGF.jpg';
import img17 from '../assets/moments/2025-05-02 Manhatten fish Market is overrated.jpg';
import img18 from '../assets/moments/2025-05-02 Nice Background.jpg';
import img19 from '../assets/moments/2025-05-02 oooh the dayout Swming session was litttt.jpg';
import img20 from '../assets/moments/2025-05-04 Babi is an influencer.jpg';
import img21 from '../assets/moments/2025-05-10 Me got flowers for the 1st time forever gratefull for that moment.jpg';


const photos = [
  { src: img1, filename: '2025-02-22 First date.jpg' },
  { src: img2, filename: '2025-03-05 After office moments (this was taken by Navodya btw).jpg' },
  { src: img3, filename: '2025-03-15 Me Slaying Babiiis bag.jpg' },
  { src: img4, filename: '2025-04-06 Had Suncrush without seeing.jpg' },
  { src: img5, filename: '2025-04-06 Testing snapchat filters.jpg' },
  { src: img6, filename: '2025-04-17 Babi loves this picture .jpg' },
  { src: img7, filename: '2025-04-17 Babi visited BK after inflation and Met Ammi.jpg' },
  { src: img8, filename: '2025-04-17 Yepp... Babi bought this shorts from GFlock Bamba.jpg' },
  { src: img9, filename: '2025-04-22 Random office selflesss.jpg' },
  { src: img10, filename: '2025-04-25 1st train ride together.jpg' },
  { src: img11, filename: '2025-04-25 DHL Visit Yep... We sang songs louddddd.jpg' },
  { src: img12, filename: '2025-04-26 Desserts at Jagrooo.jpg' },
  { src: img13, filename: '2025-04-27 Mount beach... What happened to the trash can....jpg' },
  { src: img14, filename: '2025-04-29 Model Location.jpg' },
  { src: img15, filename: '2025-04-30 1st Proper picture together at Office aurudu.jpg' },
  { src: img16, filename: '2025-04-30 After Aurudu Shoppings at OGF.jpg' },
  { src: img19, filename: '2025-05-02 oooh the dayout Swming session was litttt.jpg' },
  { src: img18, filename: '2025-05-02 Nice Background.jpg' },
  { src: img17, filename: '2025-05-02 Manhatten fish Market is overrated!.jpg' },
  { src: img20, filename: '2025-05-04 Babi is an influencer.jpg' },
  { src: img21, filename: '2025-05-10 Me got flowers for the 1st time forever gratefull for that moment.jpg' },
];


const Polaroid = styled('div')({
  background: '#fff',
  padding: '14px',
  width: '200px',
  boxShadow: '0 6px 18px rgba(255, 105, 180, 0.25)',
  margin: '20px',
  borderRadius: '16px',
  textAlign: 'center',
  fontFamily: "'Quicksand', sans-serif",
  transition: 'transform 0.25s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.06)',
  },
  '& img': {
    borderRadius: '10px',
    width: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
});

const MomentsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOpen = (img) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  const sortedPhotos = [...photos].sort((a, b) => {
    const dateA = /^\d{4}-\d{2}-\d{2}/.exec(a.filename);
    const dateB = /^\d{4}-\d{2}-\d{2}/.exec(b.filename);
    if (!dateA) return 1;
    if (!dateB) return -1;
    return new Date(dateA[0]) - new Date(dateB[0]);
  });

  return (
    <Box bgcolor="#fff0f6" minHeight="100vh" sx={{ fontFamily: "'Quicksand', sans-serif" }}>
      <Header />
      <Box p={3} textAlign="center">
        <Typography
          variant="h3"
          sx={{
            color: '#ff69b4',
            fontFamily: "'Pacifico', cursive",
            textAlign: 'center',
            mb: 2,
            textShadow: '1px 1px 2px #fbb6ce',
          }}
        >
          Our Moments 💗
        </Typography>


        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {sortedPhotos.map(({ src, filename }, i) => {
            const match = filename.match(/^(\d{4}-\d{2}-\d{2})\s+(.*)/);
            const date = match ? match[1] : '';
            const desc = match ? match[2].replace(/\.[^/.]+$/, '') : filename.replace(/\.[^/.]+$/, '');

            return (
              <Polaroid key={i} onClick={() => handleOpen(src)}>
                <img src={src} alt={desc} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#5c0036',
                    mt: 1,
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    lineHeight: 1.4,
                  }}
                >
                  {date && <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{date}</div>}
                  <div>{desc}</div>
                </Typography>
              </Polaroid>
            );
          })}
        </Box>

        <Modal
          open={Boolean(selectedImage)}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 300 }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            p={2}
            sx={{ backdropFilter: 'blur(6px)', cursor: 'pointer' }}
            onClick={handleClose}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                filter: 'none',
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default MomentsPage;
