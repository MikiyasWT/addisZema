import * as type from '../types';

const selctedSong = {
    playingSong:null,
  } 
 
  export default function selectedForPlaying(state=selctedSong,action){
     switch (action.type) {
       case type.SET_SONG_PLAYING:
         return {
           ...state,
           playingSong:action.payload
         }
         default:
           return state;
     }
   }
 
 
 