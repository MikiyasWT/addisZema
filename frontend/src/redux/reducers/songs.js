import * as type from '../types';



const initialState = {
 songs: [],
 song: [],
 playingSong:null,
 loading: false,
 error: null
}


export default function songs(state=initialState, action) {
  switch (action.type) {
    case type.GET_SONGS_REQUESTED:
       return {
        ...state,
        loading: true
      }
    case type.GET_SONGS_SUCCESS:
       return {
        ...state,
        loading: false,
        songs: action.songs
      }
    case type.GET_SONGS_FAILED:
       return {
        ...state,
        loading: false,
        error: action.message
      }

  
      case type.ADD_NEW_SONG_REQUESTED: 
        return {
            ...state,
            loading: true,
            song:action.payload
        }

      case type.ADD_NEW_SONG_SUCCESS: 
        return {
            ...state,
            loading: false,
            songs: [...songs,action.payload.values],
            
        }
      

      case type.ADD_NEW_SONG_FAILED: 
          return {
            ...state,
            loading: false,
            error: action.message
        }


  

      case type.UPPDATE_SONG_BY_ID_REQUESTED:
        let songToBeUppdated = action.payload
        
        return {
        ...state,
        loading:true,
        song:state.songs.filter(e => (e === songToBeUppdated ? songToBeUppdated:e))

        }  

      case type.UPPDATE_SONG_BY_ID_SUCCESS: 
        return {
            ...state,
            loading: false,
            songs: [...songs,action.payload.values],
            
        } 
        
        case type.UPPDATE_SONG_BY_ID_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.message
      } 

      case type.DELETE_SONG_BY_ID_REQUESTED:
        let songToBeDeleted
        return {
          ...state,
          loading:true,
          song:state.songs.filter(e => (e !== songToBeDeleted ? songToBeDeleted:e))
        }

       case type.SET_SONG_PLAYING:
        return {
          ...state,
          playingSong:action.payload
        } 
      default:
        return state;
  }
}
