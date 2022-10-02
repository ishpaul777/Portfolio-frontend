import * as React from 'react';
import { Box, Button } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Navlinks() {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <TabContext value={value}>
        <Box sx={{ marginLeft: 'auto' }}>
          <TabList onChange={handleChange} aria-label="nav links">
            <Tab label="About" value="1" />
            <Tab label="Work" value="2" />
            <Tab label="Blogs" value="3" />
          </TabList>
        </Box>
        <Box sx={{ display: 'none' }}>
          <TabPanel value="1">About</TabPanel>
          <TabPanel value="2">Work</TabPanel>
          <TabPanel value="3">Blogs</TabPanel>
        </Box>
      </TabContext>
      <Button
        color="primary"
        size="large"
        variant="contained"
        sx={{ ml: 3, borderRadius: '8px' }}
      >
        Contact
      </Button>
    </Box>
  );
}
