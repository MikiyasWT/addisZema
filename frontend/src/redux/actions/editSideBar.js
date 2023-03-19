import * as types from "../types"

export function showEditSideBar (editSideBar,songInfo) {
    
    return({
        type:types.SHOW_EDIT_SIDE_BAR,
        payload:{editSideBar,songInfo}
    })
}