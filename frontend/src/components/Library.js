import { LibraryStyle,SideBarWrapper,SearchBarContainer ,SideBar} from "../style/library";
import Song from "./Song";
import {motion} from "framer-motion"
import SearchBar from "./SearchBar";
{/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}




const Library = ({toggle,setToggle,selected,setSelected,showDropDown,setShowDropDown}) => {

    return (
      <>
      {
         toggle &&
               <SideBarWrapper>
               
                    <>
                   <SearchBarContainer>
                        <SearchBar 
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
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>
                          <Song showDropDown={showDropDown} setShowDropDown={setShowDropDown}/>

                       </div>
                  </LibraryStyle>
      
                  </> 
               
       
            </SideBarWrapper>  
      }

      </>)
}

export default Library;