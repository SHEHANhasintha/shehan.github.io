import React, { useEffect, useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './../footer/Footer'
import Header from './../headerSections/HomePageHeader';
import FaceBook from './../thirdParty/FacebookLogin/FacebookLogin';
import GoogleLogin from './../thirdParty/GoogleLogin/GoogleLogin';


import { AuthContext } from './../contexts/AuthContext';
import { ThemeContext } from './../contexts/ThemeContext';

import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://covidatlas.herokuapp.com/">
        covidatlas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 4),
    display: 'flex',
    padding: '100px 0px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



  
export default function SignInSide(props) {
  const classes = useStyles();
  //console.log(process.env);
  function filter(images){
    return (new Promise((resolve,reject) => {
    let num = Math.floor(Math.random() * Math.floor(30));
    //full: raw: regular: small: thumb: 
    let image = images.results[num].urls.regular;
      resolve(image);
    }))
  }


  const contextValue = useContext(AuthContext);


  useEffect(() => {
      axios.get(url)
        .then(res => res.data)
        .then(dataArr => filter(dataArr))
        .then(imgUrl => setbackground(imgUrl))
      contextValue.locationWindow('/signin')
  },[background]);

  const submitCredentials = (e,context,cb) => {
    e.preventDefault();
    //callback function would be to call toggleAuth
    return(new Promise(async(resolve,reject) => {
      console.log(context);
      let thita = {}
      thita.email = context.email;
      thita.password = context.password;

      axios
        .post(`/auth${context.loc}/local`,thita)
        .then((res) => {
          console.log(res);
          if (res.status == 200){
            localStorage.setItem('email', res.data.login.email);
            localStorage.setItem('firstName', res.data.login.firstName);
            localStorage.setItem('lastName', res.data.login.lastName);
            localStorage.setItem('token', res.data.tokenData.token);
            localStorage.setItem('iat', res.data.tokenData.iat);
            localStorage.setItem('exp', res.data.tokenData.exp);
            localStorage.setItem('isAuthenticated', true);


      //console.log(this.state,"here");
      //props.history.push("./app")
      
            props.history.push("./app")

          }
        })
        .catch((err) => console.log(err))
      //await resolve(cb());
    }))
  }

  const handleChangeEmailField = (e,cb) => {
    e.preventDefault();
    //callback function would be to call updateEmail
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()));
    }))
  }

  const handleChangePasswordFiled = (e,cb) => {
    e.preventDefault();
    //callback function would be to call updatePassword
    return(new Promise(async(resolve,reject) => {
      await resolve(cb(e.target.value.trim()))
    }))
  }

  let theme;
  let isLightTheme, light, dark;

  const themeContextTogglerStart = (themeContext) => {

    isLightTheme= themeContext.isLightTheme;
    light= themeContext.light;
    dark= themeContext.dark;
    theme = isLightTheme ? light : dark;
  }  

  const themeContextToggler = (themeContextValue,themeContext) => {

    switch (themeContextValue){
      case 'password':
        if (themeContext.password) return dark.ui;
        else return light.ui;

      case 'email':
        if (themeContext.email) return dark.ui;
        else return light.ui;

      default:
        return light.ui;
    }

  }

  var url = 'https://api.unsplash.com/search/photos?page=1&per_page=30&query=pills&client_id=eA8h1lVdYjJhbv2pSPaB5PDStYH-7dkJRBOz5YWV1dI'
  var [background,setbackground] = useState('https://api.unsplash.com/photos/random?client_id=eA8h1lVdYjJhbv2pSPaB5PDStYH-7dkJRBOz5YWV1dI');

  return (
 <AuthContext.Consumer>
  {(context) =>
      <ThemeContext.Consumer>
        {(themeContext) => 
     <Grid container component="main" className={classes.root}>
     {themeContextTogglerStart(themeContext)}


     <Header/>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} style={{'backgroundImage':`url(${background})`}} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(e) => handleChangeEmailField(e,context.updateEmail)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
              <TextField
                onChange={(e) => handleChangePasswordFiled(e,context.updatePassword)}
                variant="outlined"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
              onClick={(e) => submitCredentials(e,context,context.toggleAuth).then(() => console.log(context))}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        <FaceBook/>
        <GoogleLogin/>
        <Footer/>
      </Grid>
    </Grid>
  }
</ThemeContext.Consumer> 
}  
</AuthContext.Consumer>
  );
}

