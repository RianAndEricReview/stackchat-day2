import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import messages from './messages'
import newMessageEntry from './newMessageEntry'
import channels from './channels'
import newChannelEntry from './newChannelEntry'
import name from './name'

const reducer = combineReducers({
  messages,
  newMessageEntry,
  channels,
  newChannelEntry,
  name
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  ))
);

export default store;

export * from './messages'
export * from './newMessageEntry'
export * from './channels'
export * from './newChannelEntry'
export * from './name'
