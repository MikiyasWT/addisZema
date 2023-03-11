import styled from "styled-components";
import {motion} from "framer-motion"

export const SearchBarWrapper = styled.div`

position:relative;
background:white;
margin:0.25rem 0rem;
display:flex;
height:4vh;
padding:1rem 0.25rem;
align-items:center;
justify-content:space-between;
background:black;
color:white;
z-index: 10;

`;


export const InputContainer = styled.div`
width:10%;
padding:0rem 0rem;


button {
    border:none;
    padding:0rem 1rem;
    background:none;
    color:#666e87;
    cursor:pointer;
    h1 {
        font-size:2rem;
    }
    &:hover {
        color:white;
    }
}

${props => props.searchIconClicked &&`
    width:65%;
    transition:2s;
    padding:0rem 0rem;
    input {
        width:95%;
        min-height: 1rem;
        padding:0.75rem 0rem;
        border-color:rgb(115 193 227);
        border-size:5rem;
        border-radius:20px;
        cursor:text;
    
        &:focus {
            border-color:rgb(145 52 209);
            
            }
    }
  `}
`;


export const BackArrow = styled.div`
width:10%;
margin:0rem 0.25rem;
button {
    border:none;
    padding:0rem 0rem;
    background:none;
    color:#666e87;
    cursor:pointer;
    h1 {
        font-size:2rem;

    }

    &:hover {
        color:white;
    }
}
`;


export const FilterType = styled.div`
width:25%;
margin:0rem 2rem;
`;


export const Option = styled.div`
height:2rem;
`;