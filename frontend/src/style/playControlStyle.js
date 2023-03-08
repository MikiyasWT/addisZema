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
background:yellow;
`;

export const TimeControl = styled.div`
width:50%;
.icons {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 2rem;


    svg {
        cursor: pointer;
    }
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



