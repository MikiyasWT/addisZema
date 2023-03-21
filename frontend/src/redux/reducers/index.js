import { combineReducers } from "redux";
import Songs from "./songs";
import SideBar from "./sideBar"
import EditSideBar from "./editSideBar";
import SelectedDelete from "./selectForDelete";
import SelectedForPlaying from "./selectedForPlaying";
import SelectedEdit from "./selectForEdit"; 

const rootReducer = combineReducers({
 //All reducers will be here
 songs: Songs,
 sideBar:SideBar,
 editSideBar:EditSideBar,
 selectedForDelete:SelectedDelete,
 selectedForPlaying:SelectedForPlaying,
 selectedEdit:SelectedEdit
});
export default rootReducer