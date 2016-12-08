import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);
