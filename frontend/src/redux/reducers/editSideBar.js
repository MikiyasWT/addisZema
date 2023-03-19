import * as type from '../types';

const initialState = {
  editSideBar:false,
  songInfo:{}
}

 

export default function editSideBar(state=initialState, action) {
  switch (action.type) {
    case type.SHOW_EDIT_SIDE_BAR:
      return {
        ...state,
        editSideBar: !state.editSideBar,
        songInfo:action.payload
      }
    default:
      return state;
  }
}