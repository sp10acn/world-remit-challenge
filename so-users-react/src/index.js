import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>), document.getElementById('root'));
registerServiceWorker();
