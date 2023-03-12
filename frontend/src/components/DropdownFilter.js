import styled from "styled-components";

const DropdownFIlter = () =>{
    
    return(
        <Select>
        <option value="" hidden>
          <h1>All Music</h1>
        </option>
        <option value="1">Hip Hop</option>
        <option value="2">JAZ</option>
        <option value="3">Reggae</option>
        <option value="4">Electronics</option>
      </Select>
    );
}

export default DropdownFIlter;

const Select = styled.select`
  width: 25%;
  height: 35px;
  background: black;
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Main = styled("div")`
  font-family: sans-serif;
  background: #black;
  height: 100vh;
`;

