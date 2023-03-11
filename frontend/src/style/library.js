import styled from "styled-components";
import {motion} from "framer-motion"


export const SideBarWrapper = styled.div`
position:absolute;
top: 0;
left:0;
display: flex;
flex-direction: column;
width: 30%;
height: 100%;
overflow-y: scroll;
box-shadow: 2px 2px 50px gray;
background:transparent;



@media screen and (max-width:768px) {
    width: 100%;
    top:0;
    left:0
    right:0;
    overflow:hidden;
    overflow-y: scroll;
    background:white;
 };
`;


export const LibraryStyle =  styled(motion.div)`
position:relative;
top:4.2rem;  
`;

export const SearchBarContainer = styled.div`
position:fixed;
top:0;
width:30%;
z-index:10;
background:black;

@media screen and (max-width:768px) {
    width:100%; 
}
`;



















