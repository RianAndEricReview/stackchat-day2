import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeChannelName } from '../store'

const NewChannelEntry = (props) => {
  return (
    <form>
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
const mapStateToProps = (state) => {
  return { newChannelEntry: state.newChannelEntry }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(writeChannelName(event.target.value))
    }
  }
}

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
export default NewChannelEntryContainer
