import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Box, Container, Typography } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Nav } from '../../components/nav';
import { rootReducer } from '../../reducers';
import { useStyles } from '../../theme';
import { Home } from '../home';

const store = createStore(rootReducer);

export const App: any = () => {
  const classes = useStyles();
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Box color='text.primary'>
            <Container maxWidth='md'>
              <Typography className={classes.title} component='h1' variant='h4'>
                Cat Database
              </Typography>
              <Nav />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route render={() => <Redirect to='/' />} />
              </Switch>
            </Container>
          </Box>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
