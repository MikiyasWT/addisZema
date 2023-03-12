import { useState } from "react";
import styled from "styled-components";



const DropdownFIlter = ({children,background}) =>{
  
  const handleDropdownChange = ({value})=> {
    
    console.log(value)
  } 
  return(
      <Select 
         value=""
         onChange={e => handleDropdownChange(e.target)}>
        {children}
      </Select>
    );
}

export default DropdownFIlter;

const Select = styled.select`
  width: 25%;
  height: 50px;
  background:transparent;
  
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: 2px;
  margin-left: 10px;

  option {
    color: white;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-size: 1.5rem;
    padding: 5px;
    background: black;
  }
`;

const Main = styled("div")`
  font-family: sans-serif;
  background: #black;
  height: 100vh;
`;



{/* <option value="" hidden>
          All Music
        </option>
        <option value="1">Hip Hop</option>
        <option value="2">JAZ</option>
        <option value="3">Reggae</option>
        <option value="4">Electronics</option>  */}