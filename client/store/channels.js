import axios from 'axios';
import socket from '../socket';

// ACTION TYPES
const GET_CHANNELS = 'GET_CHANNELS'
const GET_NEW_CHANNEL = 'GET_NEW_CHANNEL'

// ACTION CREATORS
export const getChannels = (channels) => ({ type: GET_CHANNELS, channels })
export const getNewChannel = (channel) => ({ type: GET_NEW_CHANNEL, channel })

// THUNK CREATORS
export function fetchChannels() {
  return function thunk(dispatch) {
    return axios.get('/api/channels')
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  }
}

export function postChannel(channel, historyObject) {
  return function thunk(dispatch) {
    return axios.post('/api/channels', channel)
      .then(res => res.data)
      .then(newChannel => {
        const action = getNewChannel(newChannel);
        dispatch(action);
        socket.emit('new-channel', newChannel);
        historyObject.push(`/channels/${newChannel.id}`)
      });
  }
}

// REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {

    case GET_CHANNELS:
      return action.channels

    case GET_NEW_CHANNEL:
      return [...state.channels, action.channel]

    default:
      return state;
  }
}
