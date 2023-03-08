import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause,faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MusicPlayer,TimeControl,InputPicker } from "../style/playControlStyle";
import { useState } from "react";


const PlayControl = ({toggle}) =>{
    const [isPlaying,setIsPlaying] = useState(false);
    return(
        <MusicPlayer toggled={toggle?"toggled":""}>
              <TimeControl>
                <InputPicker>
                  <h3>0:00</h3>  
                  <input 
                    min={0} 
                    
                    type="range" />
                  <h3>3:00</h3>
                </InputPicker>
  
               <div className="icons">
                  <FontAwesomeIcon  className="goBack" icon={faAngleLeft}/>
                  <FontAwesomeIcon onClick={()=>setIsPlaying((prev)=>!prev)} className="play"  icon={isPlaying?faPause:faPlay} />
                  <FontAwesomeIcon  className="goForward" icon={faAngleRight} />
               </div>
              </TimeControl>       
         </MusicPlayer>
      )
}


export default PlayControl;