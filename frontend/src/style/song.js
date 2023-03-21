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
   background:violet;
    
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
align-items:flex-start;
justify-content:center;
padding:3rem 1rem;

h2,h3{
    color:white;
}
h2 {
    font-family: 'Noto Serif', serif;
    font-size: 1.5rem;
   
}

.songtitle {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
}

div {
    display:flex;
    align-items:center;
    justify-content:right;
    
    h3 {
        margin:0rem 1rem;
    }

  
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
display:flex;
flex-direction:row;
justify-content:space-between;




.icon {
    padding:0.25rem 0.25rem;
    margin-left:1rem;
 
}
`;

export const DropOption = styled.div`
z-index:8;
`;


export const Artist = styled.div`
display:flex;
margin-left:5rem;
`;


export const Twoicons = styled.div`
 display:flex;
 margin:1rem 0rem;
 
 .editSong {
        color:green;
        margin:0rem 0.5rem    
 }

 .deleteSong {
    color:red;
 }

`;


