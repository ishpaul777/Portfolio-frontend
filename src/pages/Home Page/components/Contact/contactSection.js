import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from './contactForm';

const Contact = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: { xs: 'center', md: 'flex-start' },
      border: { xs: 'none', md: '2px solid' },
      borderColor: 'primary.main',
      borderRadius: '13px',
      margin: { xs: '5vh 8vw', lg: '15vh 10vw' },
      p: { xs: 5, lg: 8 },
    }}
  >
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontSize: {
          xs: '2.3rem', md: '3rem', lg: '4.5rem',
        },
        fontWeight: { xs: '600', sm: '500' },
        wordWrap: 'break-word',
        width: { xs: '80vw', md: '40vw' },
        color: 'primary.main',
        mb: 3,
      }}
    >
      {/* {headline} */}
      Want to get in touch?
    </Typography>
    <ContactForm />
  </Box>
);

export default Contact;
