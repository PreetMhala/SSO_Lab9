import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../config/firebase'; // Correct the path based on your setup
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import SvgIcon from '@mui/material/SvgIcon';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Grid,
  Link,
  CssBaseline,
  Alert,
  Paper
} from '@mui/material';
import backgroundImage from './hogwarts.jpg'; // Ensure this is the correct path to your image file

function GoogleIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8441c-.2087 1.125-.8424 2.0782-1.7955 2.7218v2.2618h2.9086c1.7018-1.5655 2.6818-3.8705 2.6818-6.625z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.4673-.8055 5.9564-2.1805l-2.9086-2.2618c-.8055.54-1.8373.8591-3.0478.8591-2.3446 0-4.3286-1.5836-5.035-3.7109H.964v2.3318C2.4382 16.1536 5.4818 18 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2827-1.1173-.2827-1.71s.1027-1.17.2827-1.71V4.9582H.964C.3477 6.1732 0 7.5477 0 9c0 1.4523.3477 2.8268.964 4.0418l3-2.3318z" />
      <path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4545 3.4409 1.3454L15.3636.965C13.8373-.6455 11.8268 0 9 0 5.4818 0 2.4382 1.8464.964 4.9582l3 2.7418c.7064-2.1273 2.6905-3.7109 5.035-3.7109z" />
    </SvgIcon>
  );
}

const Auth = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(email); // Set currentUser state upon successful login
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <Box style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <CssBaseline />
      <Container component="main" maxWidth="false" disableGutters>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={6} component={Paper} elevation={6} square style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate style={{ mt: 1, width: '100%' }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={handleSignUpRedirect}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 6,
                mb: 2,
                textTransform: 'none'
              }}
              onClick={handleGoogleSignIn}
              startIcon={<GoogleIcon />}
            >
              Sign In with Google
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Auth;
