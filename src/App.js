import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home Page/home';

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

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
