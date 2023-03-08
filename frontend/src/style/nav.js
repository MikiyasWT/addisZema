import styled from "styled-components"

export const NavStyle = styled.div`
top:0;
left:0;
right:0;
display: flex;
flex-direction: row;
justify-content: space-between;
background:#743459;
padding-left:20rem;
max-width:100%;

${props => props.toggled &&`
    background: green;
    padding-left:40rem;
  `}


div {
    justify-content:space-around;
}
button {
    margin:1rem 1rem;
    padding: 8px 20px;
    border-radius: 10%;
    border: none;
    &:hover {
      background: rgb(153, 104, 202);
    }
}
`;

