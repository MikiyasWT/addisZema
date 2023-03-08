
import styled from "styled-components"

export const Cover = styled.div`
background:cyan;
max-width: 100%;
height: 65vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 0.75rem;
padding-left: 10rem;
padding-top:1rem;
overflow: hidden;

img {
    width:30%;
    height:40vh;
    border-radius: 50%;
    
}

h2{
 margin-top:0rem;   
 padding:1rem 0rem 1rem 1rem;
}

h3{
    padding:0rem 0rem 0rem 1rem;
    font-size: 1rem;
}
`;



// .songContainer {
    
//     width: 100%;
//     min-height: 60vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: 2rem;
//     padding-left: 10rem;
//     overflow-x: hidden;
//     img {
//         width:20%;
//         border-radius: 50%;
        
//     }

//     h2{
//      padding: 3rem 1rem 1rem 1rem;
//     }

//     h3{
//         font-size: 1rem;
//     }
  
// }


// @media screen and (max-width:768px) {
//     .songContainer{
//         margin-left: 0rem;
//         padding-left: 0rem;
//         padding-right: 2rem;
//         overflow-y: hidden;
//         img {
//             width:60%;
            
//         }
//     }

//     .toggled {
//         display: none;
//         overflow-y: hidden;
//     }

// }