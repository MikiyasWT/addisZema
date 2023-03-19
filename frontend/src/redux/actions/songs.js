//import * as types from "../types"
import * as types from "../types"

export function getSongs() {
 return {
  type: types.GET_SONGS_REQUESTED,
 }
}

export function getSingleSong(id){
    
    return{
        type:types.GET_SONG_BY_ID_REQUESTED,
        payload: id,
      }

}


export function addSong(song){
    return {
            type:types.ADD_NEW_SONG_REQUESTED,
            payload:song,
        }

}



export function updateSong(song) {
   
    return {
        type:types.UPPDATE_SONG_BY_ID_REQUESTED,
        payload:song
    }
}



export function deleteSong(song) {
   
    return {
        type:types.DELETE_SONG_BY_ID_REQUESTED,
        payload:song
    }
}

export function setIsPlaying(song) {
    return {
        type:types.SET_SONG_PLAYING,
        payload:song
    }
}






