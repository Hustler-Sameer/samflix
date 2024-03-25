import React from 'react';
import {CssBaseline} from '@mui/material';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

import {Actors , MovieInformation ,  Movies , Navbar , Profile} from './index';
import useStyles from './styles';
// using this as a hook



const App = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline/>
    {/* using css baseline from material ui to make some good starting idea */}
    <Navbar/>

    <main className={classes.content}>
    <div className={classes.toolbar}/>

      <Switch>
      <Route exact path="/">
          {/* <h1>Welcome to movie information </h1>
           */}
           <Movies/>
        </Route>
        <Route exact path="/movie/:id">
          {/* <h1>Welcome to movie information </h1>
           */}
           <MovieInformation/>
        </Route>
        <Route exact path="/actors/:id">
          {/* <h1>Welcome to Actors Page</h1> */}
          <Actors/>
        </Route>

        <Route exact path="/profile/:id">
          {/* <h1>Welcome to Profiles page</h1> */}
          <Profile />
        </Route>
      </Switch>
    </main>
    </div>
  )
}

export default App