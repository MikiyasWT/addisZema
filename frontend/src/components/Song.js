import test from "../assets/images/test.jpg"
import { IconContainer,Option, SongInfo, SongStyle } from "../style/song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"
const Song = ({selected,setSelected}) => {

    return(
          <SongStyle>
             <IconContainer>
                <img src={test} alt="song icon"/>

             </IconContainer>

             <SongInfo>

               <div className="songtitle">
                <h2>Mask Off</h2>
                <Option>
                     <FontAwesomeIcon icon={faEllipsisVertical}/>
               </Option>
               </div> 
                <div>
                  <h2>Future</h2>
                  <h3>Rap</h3>
                </div>

             </SongInfo>
          </SongStyle>
    );
}




export default Song;