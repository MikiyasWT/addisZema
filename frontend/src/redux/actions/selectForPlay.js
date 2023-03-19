import * as types from "../types"


export function selectedForPlaying(song) {
    return({
        type:types.SET_SONG_PLAYING,
        payload:song
    })
}