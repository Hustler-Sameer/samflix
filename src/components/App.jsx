import React from 'react';
import {CssBaseline} from '@mui/material';
import {Route , Switch} from 'react-router-dom';

const App = () => {
  return (
    <div>
    <CssBaseline/>
    {/* using css baseline from material ui to make some good starting idea */}

    <h1>
      Welcome to Samplix
    </h1>
    </div>
  )
}

export default App