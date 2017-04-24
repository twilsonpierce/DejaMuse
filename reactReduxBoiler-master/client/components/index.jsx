import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import App from './app.js';
import reducers from '../reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LandingPage from './landingPage.jsx';


injectTapEventPlugin();


ReactDOM.render(
<MuiThemeProvider>
  <Provider store={createStore(reducers)}>
	<LandingPage/>
  </Provider>
</MuiThemeProvider>
  , document.querySelector('.container'));
