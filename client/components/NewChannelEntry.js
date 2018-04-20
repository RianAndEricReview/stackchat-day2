import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeChannelName, postChannel } from '../store'

const NewChannelEntry = (props) => {
  console.log('these are the props!!!!!', props)
  return (
    <form onSubmit={props.submitChannel}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" value={props.newChannelEntry} onChange={props.handleChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const mapStateToProps = (state, ownProps) => {
  return { newChannelEntry: state.newChannelEntry }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (event) => {
      dispatch(writeChannelName(event.target.value))
    },

    submitChannel: (event) => {
      event.preventDefault()
      dispatch(postChannel({ name: event.target.channelName.value }, ownProps.history))
      dispatch(writeChannelName(''))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
