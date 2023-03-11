import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faMagnifyingGlass,faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { InputContainer,FilterType,BackArrow, SearchBarWrapper } from "../style/searchBarStyle";
import { useState } from "react";
import {motion} from 'framer-motion'




const SearchBar = ({toggle,setToggle}) => {
    const [searchIconClicked,setSearchIconClicked] = useState(false)
    return(
        <SearchBarWrapper>
            <BackArrow onClick={()=>setToggle((prev)=>!prev)}>
                <button><h1><FontAwesomeIcon icon={faArrowLeft}  /></h1></button>
                 
            </BackArrow>

            <FilterType>
                {
                    !searchIconClicked && <h2>All Music</h2>
                }
              
            </FilterType>

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