import * as type from '../types';

const initialState = {
    selectedForEdit:null,
  }
  
  export default function selectedEdit(state=initialState,action){
    switch (action.type) {
      case type.SELECT_FOR_EDIT:
        return {
          ...state,
          selectedForEdit:action.payload
        }
        default:
          return state;
    }
  }