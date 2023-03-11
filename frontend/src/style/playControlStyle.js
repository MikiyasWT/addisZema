import styled from "styled-components";

export const MusicPlayer = styled.div`
display: flex;
max-width:100%;
height: 20vh;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding-left: 10rem;
padding-bottom:1rem;
overflow: hidden;
background:rgb(239 249 255);



transition: 2s;
${props => props.toggled &&`
    padding-left:30rem;
    background:black;
    color:white;

    
  `}


  @media screen and (max-width:768px){
    padding-left: 0rem;
    padding-bottom:1rem;
    overflow: hidden; 

    position:fixed;
    bottom:0;
    left:0;
    right:0;
    z-index:20;

    ${props => props.toggled &&`
    height: 10vh;
  `}
  }

`;

export const TimeControl = styled.div`
width:50%;
.icons {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 2rem;
    color:black;

    svg {
        cursor: pointer;
    }

    ${props => props.toggled &&`
      color:white;
  `}
}

@media screen and (max-width:768px){
    width:80%; 
    ${props => props.toggled &&`
    .icons {
        padding: 0rem 2rem;
    } 
`} 


   
}

`;

export const InputPicker = styled.div`
display: flex;
justify-content: space-around;
input {
    width: 100%;
    padding: 1rem 2rem;
}
h3{
    padding: 1rem;
}

@media screen and (max-width:768px){
    
    

    ${props => props.toggled && `
    input {
        
        padding: 0rem 2rem; 
    }
    h3{
        padding:0rem 1rem;
    }
    `}
}

`;



// .timeControl {
   
    


//     .inputPicker{
//         display: flex;
//         justify-content: space-around;
//         input {
//             width: 100%;
//             padding: 1rem 0rem;
//         }
//         h3{
//             padding: 1rem;
//         }
//     }

    
// }



