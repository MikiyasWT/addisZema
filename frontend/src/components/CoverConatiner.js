import { Cover } from "../style/coverContainer";
import covercontainer from "../assets/images/covercontainer.png";
import {motion} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

 const CoverContainer = ({toggle}) => {
  
    const dispatch = useDispatch()
    const currentSong = useSelector(state => state.selectedForPlaying.playingSong)
    
   
    return (
        <Cover toggled={toggle?"toggled":""}>
 
            <motion.img 
            animate={{
               rotate: 360,
               duration:10
                }}
            src={covercontainer} alt="test cover image" />
     

            <h2>{currentSong?currentSong.artist:"unknown Artist"}</h2>
            <h3>{currentSong?currentSong.title:"unknown title"}</h3>
         
        </Cover>
    )
}


export default CoverContainer;