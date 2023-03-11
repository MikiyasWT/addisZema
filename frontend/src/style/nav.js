import styled from "styled-components"

export const NavStyle = styled.div`
top:0;
left:0;
right:0;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left:20rem;
max-width:100%;
background:rgb(239 249 255);
transition: 2s;

${props => props.toggled &&`
    background:black;
    color:white;
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

h3 {
  font-family: 'Noto Serif', serif;
  font-size: 1.1rem;
 
}


@media screen and (max-width:768px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0rem 0rem;
  width:100%;
  
  
  h3{
    margin:1rem 3rem;
  }

  div {
    display:flex;
    justify-self:flex-end;
    
    button {
      margin:1rem 0.15rem;
      padding: 8px 10px;
    }
  }
};
`;



