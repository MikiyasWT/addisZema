import styled from "styled-components";

export const SongStyle = styled.div`
display:flex;
max-width:100%;
height:18vh;
h3{
    font-family: 'Noto Serif', serif;
}
margin:0.25rem 0.25rem;
padding:0.5rem 0.25rem;
background:#6868ef;

${props => props.selected &&`
    background: green;
    
  `}

&:hover {
    background:black;
}  

`;

export const IconContainer = styled.div`

width:35%;
margin:0rem 0.25rem;
img {
    width:100%;
    height:100%;
}
`;


export const SongInfo = styled.div`

width:60%;
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:center;
padding:3rem 1rem;

h2,h3{
    color:white;
}
h2 {
    font-family: 'Noto Serif', serif;
    font-size: 1.5rem;
   
}
div {
    display:flex;
    align-items:center;
    
    h3 {
        margin:0rem 1rem;
    }
}

.songtitle {
    display:flex;
    justify-content:space-around;
}
`;

export const Option = styled.div`
position:relative;
margin:0.5rem 0.25rem;
padding:0.5rem 0.75rem;
border-radius: 50%;
background:none;
color:white;
font-size: xx-large;

&:hover {
    background:#626666;
}
`;