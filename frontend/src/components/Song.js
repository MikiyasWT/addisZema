
import musicsidebar from "../assets/images/musicsidebar.png";
import { IconContainer,Option,Artist,SongInfo,Twoicons, SongStyle } from "../style/song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {FaEdit,FaMinusCircle} from 'react-icons/fa'
import { faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import DropdownFIlter from "./DropdownFilter";
import styled from "styled-components";
import {deleteSong} from "../redux/actions/songs"
import {selectForDelete} from "../redux/actions/selectForDelete";
import { useDispatch, useSelector } from "react-redux";
import { selectedForPlaying } from "../redux/actions/selectForPlay";
import { showSideBar } from "../redux/actions/sideBar";
import { selectForEdit } from "../redux/actions/selectForEdit";


const Song = ({deleteConfirmModal,setDeleteConfirmModal,song,setAddFormStatus}) => {

const dispatch = useDispatch(); 
const [openMoreDropdown,setOpenMoreDropdown] = useState(false);
const [showOptions,setShowOptions] = useState(false)
const selectedSong = useSelector(state => state.selectedForDelete.selectedForDelete)
const currentSong = useSelector(state => state.selectedForPlaying.playingSong)
let selectedSongBackground = false;


const showDeleteConfirmModal = () => {
   dispatch(selectForDelete(song));
   setDeleteConfirmModal((prev)=>!prev);
}

const showEditSideForm = () => {
   dispatch(selectForEdit(song))
   dispatch(showSideBar((prev)=>!prev));

}

const songSelected = () => {
    dispatch(selectedForPlaying(song))
    if(currentSong && currentSong.title === song.title){
      return selectedSongBackground = true;
      
   } 
} 
return(
<SongStyle onClick={()=> songSelected()} selected={selectedSongBackground}>
             <IconContainer>
                <img src={musicsidebar} alt="song icon"/>

             </IconContainer>

             <SongInfo>

               <div className="songtitle">
               
               <h2>{song.title.substr(0,10)}</h2>
               
                <Option onClick={()=>setShowOptions((prev)=>!prev)}>
                {
                  showOptions && <Twoicons>
                     <span className="editSong" onClick={()=>showEditSideForm()}><FaEdit /></span>
                     
                     <span onClick={() => showDeleteConfirmModal()} className="deleteSong"><FaMinusCircle /></span>
                </Twoicons>
                }
                   <div className="icon"><FontAwesomeIcon icon={faEllipsisVertical}/></div>
      
               </Option>
               
               </div> 
                <div>
                  <h2>{song.artist.substr(0,10)}</h2>
                  <h3>{song.genre.substr(0,8)}</h3>
                </div>

             </SongInfo>
          </SongStyle>
    );
}




export default Song;

