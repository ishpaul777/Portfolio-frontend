import React from 'react';
import {
  Grid, TextField, Button, Box,
} from '@mui/material';

const ContactForm = () => (
  <Box
    sx={{ width: { xs: '80vw', sm: '40vw' } }}
  >
    <form>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <TextField
            sx={{ background: 'white', mb: 2, borderRadius: '8px' }}
            placeholder="Enter first name"
            label="First Name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            sx={{ background: 'white', mb: 2, borderRadius: '8px' }}
            placeholder="Enter last name"
            label="Last Name"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              width: '100%', mb: 2, background: 'white', borderRadius: '8px',
            }}
            type="email"
            placeholder="Enter email"
            label="Email"
            variant="outlined"
            fullwidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              width: '100%', mb: 2, background: 'white', borderRadius: '8px',
            }}
            label="Message"
            multiline
            rows={5}
            placeholder="Type your message here"
            fullwidth
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              fontSize: '1.2rem',
              borderRadius: '8px',
            }}
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
);

export default ContactForm;
