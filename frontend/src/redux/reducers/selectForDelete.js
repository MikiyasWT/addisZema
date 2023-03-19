import * as type from '../types';

const initialState = {
    selectedForDelete:null,
  }
  
  export default function selectedDelete(state=initialState,action){
    switch (action.type) {
      case type.SELECT_FOR_DELETE:
        return {
          ...state,
          selectedForDelete:action.payload
        }
        default:
          return state;
    }
  }


 