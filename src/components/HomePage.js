import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  Container, 
  CssBaseline, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Link 
} from '@mui/material';
import { 
  createTheme, 
  ThemeProvider 
} from '@mui/material/styles';
import { 
  LocationOn as LocationOnIcon, // Correct import
  Schedule as ScheduleIcon // Correct import
  
} from '@mui/icons-material'; // Importing icons

import uclalogo from './uclalogo.jpg';
import ucsdlogo from './ucsdlogo.jpg';
import umichlogo from './umichlogo.jpg';
import utaustinlogo from './utaustinlogo.png';
import columbialogo from './columbialogo.jpg';
import gatechlogo from './gatechlogo.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A51C30',
    },
    secondary: {
      main: '#CCFF00',
    },
       
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h5: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.5rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0 8px', // Adding horizontal spacing between buttons
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Rounded corners for cards
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          overflow: 'hidden', // Ensures the card content respects border radius
          background: 'linear-gradient(180deg, #FFFF00, #f0f0f0)', // Gradient background
          '&:hover': {
            boxShadow: '0 8px 26px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
          }
        }
      }
    }
  }
});

const events = [
  { 
    title: 'University of Texas, Austin', 
    date: 'Application Deadline (fall):- Dec 15, 2024', 
    image: utaustinlogo, 
    description: 'Flagship campus of University of Texas', 
    location: 'Austin', 
    action: 'Know More (UT Austin)' 
  },
  { 
    title: 'Georgia Tech', 
    date: 'Application Deadline (fall):- Feb 10, 2025', 
    image: gatechlogo, 
    description: 'Best Engineering School in East America for CS', 
    location: 'Atlanta', 
    action: 'Know More (GaTech)' 
  },
  { 
    title: 'University of California San Deigo', 
    date: 'Application Deadline (fall):- Dec 20, 2024', 
    image: ucsdlogo, 
    description: 'Best Engg school with private beach', 
    location: 'San Deigo', 
    action: 'Know More (UCSD)' 
  },
  { 
    title: 'University of California Los Angeles', 
    date: 'Application Deadline (fall):- Dec 21, 2024', 
    image: uclalogo, 
    description: 'Best School in Southern California', 
    location: 'Los Angeles', 
    action: 'Know More (UCLA)' 
  },
  { 
    title: 'Columbia University', 
    date: 'Application Deadline (fall):- Nov 21, 2024', 
    image: columbialogo, 
    description: 'Heart of NYC, Oldest school on West coast', 
    location: 'Manhatten, New York City', 
    action: 'Know More (Colm)' 
  },
  { 
    title: 'University of Michigan Ann Arbor', 
    date: 'Application Deadline (fall):- Nov 23, 2024', 
    image: umichlogo, 
    description: 'Best Engg school in the Great Lakes area', 
    location: 'Ann Arbor', 
    action: 'Know More (UMich)' 
  }
];



const HomePage = ({ currentUser }) => {
  const [expanded, setExpanded] = useState(null);


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Box>
            <Button color="inherit" component={Link} href="https://preetmhala.github.io/resume-website/my_cv_website.html">
              Home
            </Button>
            <Button color="inherit" component={Link} href="https://www.linkedin.com/in/prit-mhala-8baab7223/">
              About
            </Button>
            <Button color="inherit" component={Link} href="https://preetmhala.github.io/resume-website/my_cv_website.html">
              Contact Us
            </Button>
            <Button color="inherit" component={Link} href="http://localhost:3000/home#">
              Settings
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="secondary" onClick={() => window.open('https://mail.google.com/', '_blank')}>
              Gmail
            </Button>
            <Button variant="contained" color="secondary" onClick={() => window.open('https://www.youtube.com/', '_blank')}>
              YouTube
            </Button>
            <Button variant="contained" color="secondary" onClick={() => window.open('https://www.linkedin.com/', '_blank')}>
              LinkedIn
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container 
        component="main" 
        sx={{ 
          minHeight: '100vh', 
          pt: 2, 
          pb: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', // Center content horizontally
          backgroundColor: '#A51C30', // Set background color to crimson
        }}
      >
        <Box sx={{mt:4, mb: 10, textAlign: 'center' }}> {/* Center-align text */}
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ color: '#FFFFFF' }} // Set text color to white
        >
          Welcome to the University Exploration Module, {currentUser || 'User'}
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom
          sx={{ color: '#FFFFFF' }} // Set text color to white
        >
          I will guide you through your college application process.
        </Typography>

        </Box>
        <Grid container spacing={4}>
  {events.map((event, index) => (
    <Grid item xs={72} sm={12} md={6} key={index}>
      <Card sx={{ 
        transform: expanded === index ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s',
        backgroundColor: '#A51C30', // Harvard crimson background color
        color: '#333',
        padding: '16px',
        borderRadius: '15px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex', // Set display to flex
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
      }}>
        {/* Left Part: Image */}
        <div style={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="140"
            image={event.image}
            alt={event.image}
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
        </div>
        {/* Right Part: Title, Description, Location, Date, Action Button */}
        <div style={{ flex: 1, padding: '16px' }}>
          <CardContent sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            {event.icon}
            <Typography variant="h6" sx={{ mt: 2 }}>
              {event.title}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', mb: 1 }}>
              {event.description}
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 1 }}>
              <Typography variant="caption" display="block" gutterBottom>
                <LocationOnIcon fontSize="small" /> {event.location}
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <ScheduleIcon fontSize="small" /> {event.date}
              </Typography>
            </Box>
            
            
            <Button 
  variant="contained" 
  color="primary" 
  onClick={() => {
    // Define the URL to redirect to based on the event action
    let url;
    switch (event.action) {
      case 'Know More (UT Austin)':
        url = 'https://www.utexas.edu/';
        break;
      case 'Know More (GaTech)':
        url = 'https://gatech.edu/node/1/';
        break;
      case 'Know More (UCSD)':
        url = 'https://ucsd.edu/';
        break;
      case 'Know More (UCLA)':
        url = 'https://www.ucla.edu/';
        break;
      case 'Know More (Colm)':
        url = 'https://www.columbia.edu/';
        break;
      case 'Know More (UMich)':
        url = 'https://www.columbia.edu/';
      break;
      default:
        url = 'https://preetmhala.github.io/resume-website/my_cv_website.html'; // Default URL, change as needed
    }
    // Open the URL in a new tab
    window.open(url, '_blank');
  }} 
  sx={{ width: '100%' }}
>
  {event.action}
</Button>

          </CardContent>
        </div>
      </Card>
    </Grid>
  ))}
</Grid>

      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
