import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {
  loadAllSongs,
  addSongToPlaylist,
  changeSongId,
  submitNewPlaylist
} from '../action-creators/playlists';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  console.log('This is the state', state)
  return {
    songs: state.songs,
    error: state.playlists.error,
    songId: state.playlists.songId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(loadAllSongs());
  return {
    handleChange: function(event) {
      dispatch(changeSongId(event));
    },
    handleSubmit: function(event) {
      dispatch(submitNewPlaylist(event));
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSong)
