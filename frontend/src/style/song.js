import styled from "styled-components";

export const SongStyle = styled.div`
display:flex;
max-width:100%;
height:18vh;
h3{
    font-family: 'Noto Serif', serif;
}
padding:1rem 0.25rem;
background:white;

${props => props.selected &&`
    background: green;
    
  `}

`;

export const IconContainer = styled.div`

width:35%;
margin:0rem 0.75rem;
img {
    width:100%;
    height:100%;
}
`;


export const SongInfo = styled.div`
background:yellow;
width:60%;
display:flex;
flex-direction:column;
align-items:flex-end;
justify-content:center;
padding:3rem 2rem;
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
`;