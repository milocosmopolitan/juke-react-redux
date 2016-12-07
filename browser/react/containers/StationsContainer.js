import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';

function convertSongsToStation(songs){
  
  let stations = {};

  songs.map(song=>{
      if(stations[song.genre]) stations[song.genre].push(song);
      else stations[song.genre] = [song];      
  })

  return stations
}


const mapStateToProps = function (state, ownProps) {  
  return {
    stations: convertSongsToStation(state.songs)
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);
export default StationsContainer;
