import test from "../assets/images/test.jpg"
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


const Song = ({deleteConfirmModal,setDeleteConfirmModal,song}) => {

const dispatch = useDispatch(); 
const [openMoreDropdown,setOpenMoreDropdown] = useState(false);
const [showOptions,setShowOptions] = useState(false)
const selectedSong = useSelector(state => state.selectedForDelete.selectedForDelete)

console.log(selectedSong)

const showDeleteConfirmModal = () => {
   dispatch(selectForDelete(song));
   setDeleteConfirmModal((prev)=>!prev);
}
return(
          <SongStyle onClick={()=> dispatch(selectedForPlaying(song))}>
             <IconContainer>
                <img src={test} alt="song icon"/>

             </IconContainer>

             <SongInfo>

               <div className="songtitle">
               
               <h2>{song.title.substr(0,10)}</h2>
               
                <Option onClick={()=>setShowOptions((prev)=>!prev)}>
                {
                  showOptions && <Twoicons>
                     <span className="editSong"><FaEdit /></span>
                     
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


//<span onClick={() => {dispatch(deleteSong(song))}} className="deleteSong"><FaMinusCircle /></span>
//<span onClick={()=>setDeleteConfirmModal((prev)=>!prev)} className="deleteSong"><FaMinusCircle /></span>



{/* <Option onClick={()=>setOpenMoreDropdown((prev)=>!prev)}>
<FontAwesomeIcon icon={faEllipsisVertical}/>
</Option>
<DropOption>{
   openMoreDropdown && 
   
   <DropdownFIlter>
           <option value="1">Edit</option>
           <option value="2">Delete</option>
           
   </DropdownFIlter>
}
</DropOption> */}



