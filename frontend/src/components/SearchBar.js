import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faMagnifyingGlass,faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { InputContainer,FilterType,BackArrow, SearchBarWrapper } from "../style/searchBarStyle";
import { useState } from "react";
import {motion} from 'framer-motion'
import DropdownFIlter from "./DropdownFilter";
import Select from "react-select"



const SearchBar = ({toggle,setToggle,showDropDown,setShowDropDown,searchTerm,setSearchTerm}) => {
    const [searchIconClicked,setSearchIconClicked] = useState(false)
    
    const backArrowClicked = () => {
        setToggle((prev)=>!prev);
        setSearchTerm('');
    }
    return(
        <SearchBarWrapper>
            <BackArrow onClick={()=>backArrowClicked()}>
                <button><h1><FontAwesomeIcon icon={faArrowLeft}  /></h1></button>
                 
            </BackArrow>

            
                {
                    !searchIconClicked && <h2 onClick={()=>setShowDropDown((prev)=>!prev)}>All Music <span>7/40</span></h2>    
                }

                {
                    showDropDown && 
                    
                    <DropdownFIlter onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm}>
                               
                               <option value="" hidden>
                                    All Music
                                </option>
                                <option value="hiphop">Hip Hop</option>
                                <option value="jaz">JAZ</option>
                                <option value="reggae">Reggae</option>
                                <option value="electronics">Electronics</option> 
                                <option value="Rap">Rap</option>
                                <option value="latin">dansol</option>
                    </DropdownFIlter>
                    }
            

            <InputContainer searchIconClicked={searchIconClicked}>
              {
                searchIconClicked?
                     <input className="searchFilter"
                            type="text"  
                            placeholder="Search..." 
                            onChange={(event) => setSearchTerm(event.target.value)}/>
                     :<button 
                        onClick={(e)=> setSearchIconClicked((prev)=>!prev)}><h1><FontAwesomeIcon icon={faMagnifyingGlass}  /></h1>
                      </button>
              }
                
                                       
            </InputContainer>
            
        </SearchBarWrapper>
    );
}


export default SearchBar;


