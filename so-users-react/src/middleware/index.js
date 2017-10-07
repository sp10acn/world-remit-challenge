import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { applyMiddleware } from 'redux';

export default applyMiddleware(logger, thunk, promise());