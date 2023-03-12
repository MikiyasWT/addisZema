import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faMagnifyingGlass,faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { InputContainer,FilterType,BackArrow, SearchBarWrapper } from "../style/searchBarStyle";
import { useState } from "react";
import {motion} from 'framer-motion'
import DropdownFIlter from "./DropdownFilter";




const SearchBar = ({toggle,setToggle,showDropDown,setShowDropDown}) => {
    const [searchIconClicked,setSearchIconClicked] = useState(false)
    return(
        <SearchBarWrapper>
            <BackArrow onClick={()=>setToggle((prev)=>!prev)}>
                <button><h1><FontAwesomeIcon icon={faArrowLeft}  /></h1></button>
                 
            </BackArrow>

            
                {
                    !searchIconClicked && <h2 onClick={()=>setShowDropDown((prev)=>!prev)}>All Music <span>7/40</span></h2>    
                }

                {
                    showDropDown && <DropdownFIlter />
                    }
            

            <InputContainer searchIconClicked={searchIconClicked}>
              {
                searchIconClicked?
                     <input type="text"  placeholder="Search" />
                     :<button 
                        onClick={(e)=> setSearchIconClicked((prev)=>!prev)}><h1><FontAwesomeIcon icon={faMagnifyingGlass}  /></h1>
                      </button>
              }
                
                                       
            </InputContainer>
            
        </SearchBarWrapper>
    );
}


export default SearchBar;


{/* <FilterType> 
{
    !searchIconClicked && <h2>All Music <span>7/40</span></h2>
}

</FilterType> */}