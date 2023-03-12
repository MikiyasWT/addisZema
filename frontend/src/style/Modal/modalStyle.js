import {motion} from "framer-motion"
import styled from "styled-components"

export const ModalStyle = styled(motion.div)`
width:30%;
height:40vh;
background:#363666;
border-radius:12px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

img {
    width:20%;
    margin-left:10rem;
}

.confirmationbox {
    padding:0rem 0rem;
    margin-left:5rem;
}

h2{
    padding:0rem 7rem;
    color:white;
}

p{
    color:grey;
}

@media screen and (max-width:768px){
width:80%;
}

`;

export const Buttons = styled.div`
display:flex;
align-content:center;
justify-content:space-between;

button {
    padding:1rem 2rem;
    border-radius:8%;
    margin:0.25rem 1rem;
    color:white;
    background:${props => props.color};
}

`;

