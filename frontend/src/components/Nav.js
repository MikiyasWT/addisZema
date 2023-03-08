import { NavStyle } from "../style/nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic,faMagnifyingGlass, faPlus,faMinus,faTrash,faEllipsisVertical,faPenClip} from "@fortawesome/free-solid-svg-icons"

const Nav = ({toggle,setToggle}) =>{

    return (
        <NavStyle toggled={toggle?"toggled":""}>
           <h3>addisZema</h3>

           <div>
           <button>
            Stats
           </button>
           <button onClick={()=>setToggle((prev)=>!prev)}>
            Library <FontAwesomeIcon className="libraryIcon" icon={faMusic} />
           </button>
           <button>
            Add <FontAwesomeIcon icon={faPlus} />
           </button>
           </div>
           
           
        </NavStyle>
    )
}


export default Nav;