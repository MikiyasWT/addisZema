import styled from "styled-components";
import BackDrop from "./Backdrop";
import { useMemo } from 'react';
import { useSelector } from "react-redux";


const Stats = ({setDisplayStats}) => {
      const songs = useSelector(state => state.songs.songs);   
      const song = useSelector(state => state.songs.song); 
      const totalSong = useMemo(() => songs.length, [song]);
      const rap = useMemo(() =>
         songs.filter((val) => {
            if(val.genre.toLowerCase() =='rap'){
                  return val
            }
         }).length,
      [song]);

      const jaz = useMemo(() =>
      songs.filter((val) => {
         if(val.genre.toLowerCase() =='jaz'){
               return val
         }
      }).length,
      [song]);
      
      
    return(
          <BackDrop setDisplayStats={setDisplayStats}>
             <StatsContainer onClick={(e)=> e.stopPropagation()}>
                <div className="stat">
                      <div className="name">
                        <h1>total</h1>
                      </div>
                      <div className="numbers">
                         <h4>{totalSong} Songs</h4>
                      </div>
                </div>
              

                <div className="stat">
                      <div className="name">
                        <h1>Rap</h1>
                      </div>
                      <div className="numbers">
                      <h4>{rap} Songs</h4>
                      </div>
                </div>

                <div className="stat">
                      <div className="name">
                        <h1>Jaz</h1>
                      </div>
                      <div className="numbers">
                      <h4>{jaz} Songs</h4>
                      </div>
                </div>

             
                
             </StatsContainer>
          </BackDrop>
    );
}

export default Stats;

const StatsContainer = styled.div`
top:0%;
left:0%;
width:30%;
height:90vh;
background:white;
display: grid;
grid-template-columns: repeat(3, 1fr);
//grid-template-rows: repeat(3, 1vw);
grid-gap: 0rem;
padding:0.25rem 2rem;

.div {
    margin:0rem 1rem;
    padding:0rem 1rem;
    height:2vh;
    background:yellow;
    width:100%;
}
`;


