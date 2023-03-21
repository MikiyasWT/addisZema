import { NavStyle } from "../style/nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic,faMagnifyingGlass, faPlus,faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"
import {motion} from "framer-motion"
import { useDispatch } from "react-redux";
import { showSideBar} from "../redux/actions/sideBar";

const Nav = ({toggle,setToggle,setDisplayStats}) =>{

    const dispatch = useDispatch();
    return (
        <NavStyle toggled={toggle?"toggled":""}>
           <h3>addisZema</h3>

           <div>
           <motion.button
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           onClick={()=>setDisplayStats((prev)=>!prev)}
           >
            Stats
           </motion.button>
           <motion.button 
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           onClick={()=>setToggle((prev)=>!prev)}>
            Library <FontAwesomeIcon className="libraryIcon" icon={faMusic} />
           </motion.button>
           <motion.button
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           onClick={()=>dispatch(showSideBar((prev)=>!prev))}>
            Add <FontAwesomeIcon icon={faPlus} />
           </motion.button>
           </div>
           
           
        </NavStyle>
    )
}


export default Nav;