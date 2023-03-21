import { LibraryStyle,SideBarWrapper,SearchBarContainer ,SideBar} from "../style/library";
import Song from "./Song";
import {motion} from "framer-motion"
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getSongs } from "../redux/actions/songs";
import {selectedForPlaying} from "../redux/actions/selectForPlay";


const Library = ({toggle,setToggle,selected,setSelected,showDropDown,setShowDropDown,deleteConfirmModal,setDeleteConfirmModal}) => {

const dispatch = useDispatch();
const songs = useSelector(state => state.songs.songs);
const song = useSelector(state => state.songs.song);
const [searchTerm,setSearchTerm] = useState('');


useEffect(() => {
      dispatch(getSongs())
      
      },[song,searchTerm])
    return (
      <>
      {
         toggle &&
               <SideBarWrapper>
               
                    <>
                   <SearchBarContainer>
                        <SearchBar 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        showDropDown={showDropDown}
                        setShowDropDown={setShowDropDown}
                        toggle={toggle} setToggle={setToggle}/>
                   </SearchBarContainer>
      
                   <LibraryStyle
                   initial={{x:'-50%'}}
                   animate={{x:'0%'}}
                   transition={{type:"tween",ease:'easeOut',duration:1}}
                   exit={{x:'50%'}}
                      >
                        
                     
                       <div className="library-songs ">
                        {
                          songs && songs.sort((a, b) => a.title.localeCompare(b.title))
                          .filter((val) => {
                              if(searchTerm == ""){
                                 return val;    
                              }
                              else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                              }
                              else if(val.artist.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                              }
                              else if(val.genre.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                              }
                          })
                          .map((song,index) => (
                              <Song 
                                    key={index}
                                    song={song}
                                    deleteConfirmModal={deleteConfirmModal}
                                    setDeleteConfirmModal={setDeleteConfirmModal}
                                    />
                          ))     
                        }

                       </div>
                  </LibraryStyle>
      
                  </> 
               
       
            </SideBarWrapper>  
      }

      </>)
}

export default Library;

{/* <div className="library-songs ">
                        {
                          songs && songs.sort((a, b) => a.title.localeCompare(b.title)).map((song,index) => (
                              <Song 
                                    key={index}
                                    song={song}
                                    deleteConfirmModal={deleteConfirmModal}
                                    setDeleteConfirmModal={setDeleteConfirmModal}
                                    />
                          ))    
                        }

</div> */}

