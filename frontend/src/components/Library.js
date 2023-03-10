import { LibraryStyle ,SideBar} from "../style/library";
import Song from "./Song";
import {motion} from "framer-motion"
{/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}




const Library = ({toggle,setToggle,selected,setSelected}) => {

    return (
        <div>
         {
             toggle &&    
             <LibraryStyle
             initial={{x:'-50%'}}
             animate={{x:'0%'}}
             transition={{type:"tween",ease:'easeOut',duration:1}}
             exit={{x:'50%'}}
                >
             
                 <div className="library-songs ">
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                 </div>
            </LibraryStyle>
         }
 
      </div>  
     )
}

export default Library;