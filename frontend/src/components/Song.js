import test from "../assets/images/test.jpg"
import { IconContainer, SongInfo, SongStyle } from "../style/song";
 

const Song = ({selected,setSelected}) => {

    return(
          <SongStyle>
             <IconContainer>
                <img src={test} alt="song icon"/>

             </IconContainer>

             <SongInfo>
                <h2>Mask Off</h2>
                <div>
                  <h2>Future</h2>
                  <h3>Rap</h3>
                </div>

             </SongInfo>
          </SongStyle>
    );
}




export default Song;