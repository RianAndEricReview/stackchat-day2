// ACTION TYPES
const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME'

// ACTION CREATORS
export const writeChannelName = (input) => ({ type: WRITE_CHANNEL_NAME, input })

// REDUCER
export default function reducer(state = {newChannelEntry: ''}, action) {
  switch (action.type) {
    case WRITE_CHANNEL_NAME:
      return { ...state, newChannelEntry: action.input }
    default:
      return state;
  }
}