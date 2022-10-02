/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Box, IconButton, Card, CardContent, Avatar,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TestimonialCard({ data }) {
  return (
    <Card key={data.name} sx={{ maxWidth: { xs: '80vw', md: '30vw', lg: '25vw' } }} elevation={3}>
      <CardContent>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: '20px',
          mb: '1.5rem',
        }}
        >
          <Avatar
            alt={data.name}
            src={data.image}
            sx={{ width: 90, height: 90 }}
          />
          <div>
            <Typography
              variant="h5"
              component="h3"
            >
              {data.name}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {data.position}
            </Typography>
            <a href={data.linkedin}>
              <IconButton sx={{ p: 0, m: 0 }} aria-label="linkedin" color="primary">
                <LinkedInIcon sx={{ p: 0, m: 0 }} />
              </IconButton>
            </a>
          </div>
        </Box>
        <Typography variant="body1" color="text.secondary">
          <span style={{
            fontWeight: '700', color: 'black',
          }}
          >
            {' '}
            &#8220;
          </span>
          {data.testimonial}
          <span style={{
            fontWeight: '700', color: 'black',
          }}
          >
            {' '}
            &#8220;
            {' '}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
