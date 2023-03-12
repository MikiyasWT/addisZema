import test from "../assets/images/test.jpg"
import { IconContainer,Option,Artist,SongInfo,Twoicons, SongStyle } from "../style/song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {FaEdit,FaMinusCircle} from 'react-icons/fa'
import { faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import DropdownFIlter from "./DropdownFilter";
import styled from "styled-components";



const Song = ({showDropDown,setShowDropDown}) => {
const [openMoreDropdown,setOpenMoreDropdown] = useState(false);
const [showOptions,setShowOptions] = useState(false)
const handleDropdownChange = ({value})=>{
if(value == 2){

}
return;
} 
return(
          <SongStyle>
             <IconContainer>
                <img src={test} alt="song icon"/>

             </IconContainer>

             <SongInfo>

               <div className="songtitle">
               
               <h2>Mask Off</h2>
               
                <Option onClick={()=>setShowOptions((prev)=>!prev)}>
                {
                  showOptions && <Twoicons>
                     <span className="editSong"><FaEdit /></span>
                     <span onClick={()=>setShowDropDown((prev)=>!prev)} className="deleteSong"><FaMinusCircle /></span>
                </Twoicons>
                }
                   <div className="icon"><FontAwesomeIcon icon={faEllipsisVertical}/></div>
      
               </Option>
               
               </div> 
                <div>
                  <h2>Future</h2>
                  <h3>Rap</h3>
                </div>

             </SongInfo>
          </SongStyle>
    );
}




export default Song;







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



