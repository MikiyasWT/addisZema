import * as types from "../types"

export function selectForEdit(song) {
    
   return({
            type: types.SELECT_FOR_EDIT,
            payload:song
        })
}