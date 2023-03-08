import { NavStyle } from "../style/nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic} from "@fortawesome/free-solid-svg-icons"

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
           </div>
           
           
        </NavStyle>
    )
}


export default Nav;