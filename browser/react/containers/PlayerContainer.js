import React, {Component} from 'react';
import AUDIO from '../audio';
import {connect} from 'react-redux';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps)=>{
  //console.log('mapStateToProps',state);
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList, 
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  }
}

const mapDispatchToProps = (dispatch, ownProps)=>{

  AUDIO.addEventListener('ended', function() {
      dispatch(next());
    });
  AUDIO.addEventListener('timeupdate', () => {
    dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
  });

  
  return {
    prev: function() {
      dispatch(previous());
    },
    toggle: function(song, list){       
      dispatch(toggleSong(song, list));
    },
    next: function() {
      dispatch(next());
    }
  }
}

export const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);
