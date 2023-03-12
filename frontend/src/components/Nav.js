import { NavStyle } from "../style/nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic,faMagnifyingGlass, faPlus,faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"
import {motion} from "framer-motion"
const Nav = ({toggle,setToggle}) =>{

    return (
        <NavStyle toggled={toggle?"toggled":""}>
           <h3>addisZema</h3>

           <div>
           <motion.button
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
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
           whileTap={{scale:0.9}}>
            Add <FontAwesomeIcon icon={faPlus} />
           </motion.button>
           </div>
           
           
        </NavStyle>
    )
}


export default Nav;