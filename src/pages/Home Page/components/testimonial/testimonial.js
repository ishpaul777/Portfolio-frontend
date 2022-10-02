/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Box,
} from '@mui/material';
import TestimonialCard from './testimonialCard';

const TestimoialSection = ({ data }) => (
  <Box
    component="section"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontSize: {
          xs: '1.8rem', md: '2.5rem',
        },
        fontWeight: { xs: '600', sm: '500' },
        wordWrap: 'break-word',
        width: '75vw',
        mb: '2rem',
        mt: '2rem',
        color: 'primary.main',
        textDecoration: 'none',
      }}
    >
      {data.header}
    </Typography>
    <Box sx={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {
        data.persons.map((person) => (
          <TestimonialCard key={person.name} data={person} />
        ))
      }
    </Box>
  </Box>
);

export default TestimoialSection;
