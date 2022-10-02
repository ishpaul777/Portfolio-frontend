/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = ({ data }) => {
  const { headline, subHeadline } = data;
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: { xs: '80vh', sm: '100vh' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: {
              xs: '2.3rem', sm: '3.6rem', md: '4rem', lg: '5.2rem',
            },
            fontWeight: { xs: '600', sm: '500' },
            wordWrap: 'break-word',
            width: '75vw',
            color: 'primary.main',
            textDecoration: 'none',
          }}
        >
          {headline}
        </Typography>
        <Typography
          variant="subtitle3"
          component="p"
          sx={{
            marginTop: '1.5rem',
            fontSize: { xs: '.9rem', sm: '1.2rem', md: '1.4rem' },
            fontWeight: 400,
            wordWrap: 'break-word',
            width: '65vw',
            color: 'primary.light',
            textDecoration: 'none',
          }}
        >
          {subHeadline}
        </Typography>
        <Button
          color="primary"
          size="large"
          variant="contained"
          sx={{
            marginTop: '2rem',
            borderRadius: '8px',
            fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' },
            padding: '1rem 1.5rem',
          }}
        >
          View Work
        </Button>
      </div>
    </Box>
  );
};

export default Hero;
