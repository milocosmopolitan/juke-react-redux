import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  RECEIVE_SONGS,
  HANDLE_CHANGE,
  HANDLE_ERROR
} from '../constants';

import {convertSong} from '../utils';

const initialPlaylistsState = {
  selected: {},
  list: [],
  songId: 1,
  error: false
};

export default function (state = initialPlaylistsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PLAYLISTS:
      newState.list = action.playlists;
      break;

    case RECEIVE_PLAYLIST:
      newState.selected = action.playlist;
      newState.selected.songs = newState.selected.songs.map(convertSong);
      break;

    case HANDLE_CHANGE:
      newState.songId = action.songId || 1;
      newState.error = action.error || false;
      break;

      case HANDLE_ERROR:
        newState.error = true;
        break;

    default:
      return state;

  }

  return newState;

}
