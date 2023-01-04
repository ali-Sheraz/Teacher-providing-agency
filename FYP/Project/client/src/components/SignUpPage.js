import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {Link} from 'react-router-dom'
import { useState } from 'react';
const theme = createTheme();

export default function SignUpPage() {

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })

    const data = await response.json()
    console.log(data)
}

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg?size=338&ext=jpg&ga=GA1.2.1656233828.1669090967)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
  
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
               <TextField
                margin="normal"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                required
                fullWidth
                id="name"
                label="Enter your Name"
                name="text"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                {/* <Link to={'/Card'}> */}
              <Button
                type="submit"
                value="Register"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {/* </Link> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}