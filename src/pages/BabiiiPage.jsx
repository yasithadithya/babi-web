import React, { useState } from 'react';
import { Box, Typography, Modal, Backdrop } from '@mui/material';
import { styled } from '@mui/system';
import Header from '../components/Header'; // <- Add this line to include your header

// === IMPORT IMAGES ===
// (Add all 32 imports here as you already have)

// Import all JPGs manually (since there's no backend)
import img1 from '../assets/babi/2025-02-27 Babii and her balloon.jpg';
import img2 from '../assets/babi/2025-03-15 Kandy Visit... Nope Babi isn\'t naked here.jpg';
import img3 from '../assets/babi/2025-03-25 Sadunis\' Farewell I love the top.jpg';
import img4 from '../assets/babi/2025-04-05 Fit check passed with flying colors.jpg';
import img5 from '../assets/babi/2025-04-06 Mmmm Meltzzzz.jpg';
import img6 from '../assets/babi/2025-04-16 Babi Hijacked My phone.jpg';
import img7 from '../assets/babi/2025-04-16 Visited MC after an apocolypse.jpg';
import img8 from '../assets/babi/2025-04-17 Zomato and Kitchen Renovation.jpg';
import img9 from '../assets/babi/2025-04-21 Cuteeeeee.jpg';
import img10 from '../assets/babi/2025-04-25 Hehe.jpg';
import img11 from '../assets/babi/2025-04-25 Mss.Muncheeesss at Smash Burgar.jpg';
import img12 from '../assets/babi/2025-04-25 Munchesss 2.jpg';
import img13 from '../assets/babi/2025-04-26 Supermodel at SLIIT library.jpg';
import img14 from '../assets/babi/2025-04-29 Not me assisting the mirror selfie.jpg';
import img15 from '../assets/babi/2025-04-29 Supermodel at Uptown.jpg';
import img16 from '../assets/babi/2025-04-30 My aurudu Kumariya.jpg';
import img17 from '../assets/babi/2025-05-02 Shooting in action.jpg';
import img18 from '../assets/babi/2025-05-02 Yep babi can shoottt.jpg';
import img19 from '../assets/babi/2025-05-03 Supermodel at SLIIT libraby Part 2.jpg';
import img20 from '../assets/babi/2025-05-07 who is this handmodel.jpg';
import img21 from '../assets/babi/2025-05-09 Pan Pan and Paris boobs.jpg';
import img22 from '../assets/babi/Chuti babii atg Pinnawala ig.jpg';
import img23 from '../assets/babi/Chuti babii with ammi and thaththi.jpg';
import img24 from '../assets/babi/Chutii babi and the swing.jpg';
import img25 from '../assets/babi/Chutii babiii 2.jpg';
import img26 from '../assets/babi/Chutii babiii.jpg';
import img27 from '../assets/babi/Chutii chutii babii.jpg';
import img28 from '../assets/babi/Chutii taffyyy.jpg';
import img30 from '../assets/babi/I loveee theseeee part 2.jpg';
import img29 from '../assets/babi/I loveee theseeee.jpg';
import img31 from '../assets/babi/Omg Who is this super model.jpg';
import img32 from '../assets/babi/oooh she\'s a golfer.jpg';

// Add the rest similarly...

// List of image objects
const images = [
  { src: img1, filename: '2025-02-27 Babii and her balloon' },
  { src: img2, filename: '2025-03-15 Kandy Visit... Nope Babi isn\'t naked here' },
  { src: img3, filename: '2025-03-25 Sadunis\' Farewell I love the top' },
  { src: img4, filename: '2025-04-05 Fit check passed with flying colors' },
  { src: img5, filename: '2025-04-06 Mmmm Meltzzzz' },
  { src: img6, filename: '2025-04-16 Babi Hijacked My phone' },
  { src: img7, filename: '2025-04-16 Visited MC after an apocolypse' },
  { src: img8, filename: '2025-04-17 Zomato and Kitchen Renovation' },
  { src: img9, filename: '2025-04-23 Cuteeeee' },
  { src: img10, filename: '2025-04-25 Hehe.' },
  { src: img11, filename: '2025-04-25 Mss.Muncheeess at Smash Burgar.' },
  { src: img12, filename: '2025-04-25 Muncheess 2.' },
  { src: img13, filename: '2025-04-26 Supermodel at SLIIT library.' },
  { src: img14, filename: '2025-04-29 Not me assisting the mirror selfie.' },
  { src: img15, filename: '2025-04-29 Supermodel at Uptown.' },
  { src: img16, filename: '2025-04-30 My aurudu Kumariya.' },
  { src: img17, filename: '2025-05-02 Shooting in action.' },
  { src: img18, filename: '2025-05-02 Yep babi can shoott!' },
  { src: img19, filename: '2025-05-03 Supermodel at SLIIT library Part 2.' },
  { src: img20, filename: '2025-05-07 who is this handmodel.' },
  { src: img21, filename: '2025-05-09 Pan Pan and Paris boobs.' },
  { src: img22, filename: 'Chuti babii at Pinnawala ig.' },
  { src: img23, filename: 'Chuti babii with ammi and thaththi.' },
  { src: img24, filename: 'Chuti babi and the swing.' },
  { src: img25, filename: 'Chutii babii 2.' },
  { src: img26, filename: 'Chutii babiii.' },
  { src: img27, filename: 'Chuti chuti babii.' },
  { src: img28, filename: 'Chutii taffyyy.' },
    { src: img29, filename: 'I loveee theseeeee.' },
  { src: img30, filename: 'I loveee theseeeee part 2.' },
  { src: img31, filename: 'Omg Who is this super model.' },
  { src: img32, filename: 'oooh she\'s a golfer.' },
];
// === STYLED COMPONENT ===
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
  '& img, & video': {
    borderRadius: '10px',
    width: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
});


// === COMPONENT ===
const BabiiiPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleOpen = (img) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  const sortedImages = [...images].sort((a, b) => {
    const dateA = /^\d{4}-\d{2}-\d{2}/.exec(a.filename);
    const dateB = /^\d{4}-\d{2}-\d{2}/.exec(b.filename);
    if (!dateA) return 1;
    if (!dateB) return -1;
    return new Date(dateA[0]) - new Date(dateB[0]);
  });

  return (
    <Box bgcolor="#ffe4ec" minHeight="100vh">
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
  BABIIII 💕
</Typography>


        <Box display="flex" justifyContent="center" flexWrap="wrap" >
          {sortedImages.map(({ src, filename }, i) => {
            const match = filename.match(/^(\d{4}-\d{2}-\d{2})\s+(.*)/);
            const date = match ? match[1] : '';
            const desc = match ? match[2] : filename.replace('.jpg', '');

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
            sx={{ backdropFilter: 'blur(6px)' }}
            onClick={handleClose}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                filter: 'none', // prevent dimming
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default BabiiiPage;
