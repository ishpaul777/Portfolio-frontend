import React from 'react';
import {
  Typography, Box, Button, Card, CardActions, CardContent, Avatar,
} from '@mui/material';

const TestimoialSection = () => (
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
        color: 'primary.main',
        textDecoration: 'none',
      }}
    >
      On Working with me
    </Typography>
    <Box sx={{
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Card sx={{ maxWidth: { xs: '80vw', md: '30vw', lg: '25vw' } }} elevation={3}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '20px',
            mb: '1.5rem',
          }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://uploads-ssl.webflow.com/5fa25266badbdb239c79ef86/6003bc8a500ee553547067e4_1560732160364-p-500.jpeg"
              sx={{ width: 90, height: 90 }}
            />
            <div>
              <Typography
                variant="h5"
                component="h3"
              >
                Lana Kinney
              </Typography>
              <Typography variant="subtitle1" component="h3">
                Student Mentor @ Microverse
              </Typography>
            </div>
          </Box>
          <Typography variant="body1" color="text.secondary">
            <span style={{
              fontWeight: '700', color: 'black',
            }}
            >
              {' '}
              &#8220;
              {' '}
            </span>
            Ishpaul is a guru at things UX design, consistently producing intuitive, modern,
            and bold designs. He is a natural problem solver in the design space so everyone went
            to him if they were stuck on a feature or flow.. Any business would be lucky to have
            him.
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
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  </Box>
);

export default TestimoialSection;
