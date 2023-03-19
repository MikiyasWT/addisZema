import * as types from "../types"

export function selectForDelete(song) {
    
   return({
            type: types.SELECT_FOR_DELETE,
            payload:song
        })
}





