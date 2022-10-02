import { createTheme, ThemeProvider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Home from './pages/Home Page/home';
import Header from './HEADER/Header';
import logo from './assets/logo.png';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1a1b1f',
      light: '#53636a',
      dark: '#1c2a30',
    },
    secondary: {
      main: 'hsl(0, 0%, 100%)',
      light: '#fbfbfb',
      dark: '#afafaf',
    },
    text: {
      primary: 'hsl(200, 15%, 8%)',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const data = {
  Header: {
    logoImage: logo,
    logoText: 'Ishpaul Singh',
  },
  Homepage: {
    HeroSection: {
      headline: 'A developer passionate about creating beautiful user friendly products.',
      subHeadline: 'Full Stack Developer Based in New Delhi, India, skilled with a keen eye for creating engaging UI, with solid backend system foundation.',
    },
    testimoials: {
      header: 'On Working with me',
      persons: [
        {
          name: 'Lana Kinney',
          position: 'Student Mentor @ Microverse',
          image: 'https://source.unsplash.com/random/?headshot',
          linkedin: 'https://www.linkedin.com/in/ishpaul-singh-264590226',
          testimonial: 'Ishpaul is a guru at things UX design, consistently producing intuitive, modern, and bold designs. He is a natural problem solver in the design space so everyone went to him if they were stuck on a feature or flow.. Any business would be lucky to have him.',
        },
        {
          name: 'Mike',
          position: 'Student Mentor @ Microverse',
          image: 'https://source.unsplash.com/random/?headshot',
          linkedin: 'https://www.linkedin.com/in/ishpaul-singh-264590226',
          testimonial: 'Ishpaul is a guru at things UX design, consistently producing intuitive, modern, and bold designs. He is a natural problem solver in the design space so everyone went to him if they were stuck on a feature or flow.. Any business would be lucky to have him.',
        },
        {
          name: 'John Doe',
          position: 'Student Mentor @ Microverse',
          image: 'https://source.unsplash.com/random/?headshot',
          linkedin: 'https://www.linkedin.com/in/ishpaul-singh-264590226',
          testimonial: 'Ishpaul is a guru at things UX design, consistently producing intuitive, modern, and bold designs. He is a natural problem solver in the design space so everyone went to him if they were stuck on a feature or flow.. Any business would be lucky to have him.',
        },
      ],
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        { /* Navbar/Header Common all over the site */ }
        <Header data={data.Header} />
        { /* Socials on right bottom Common all over the site */ }
        <div style={{
          position: 'fixed',
          right: '1rem',
          bottom: '1rem',
        }}
        >
          <GitHubIcon fontSize="large" sx={{ display: 'block', mb: 2, zIndex: '1200' }} />
          <LinkedInIcon fontSize="large" sx={{ display: 'block', mb: 2, zIndex: '1200' }} />
        </div>
        {/* Homepage */}
        <Home data={data.Homepage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
