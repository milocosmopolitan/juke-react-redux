import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

const mapStateToProps = ( state, ownProps ) => {
  return {
    album: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);
