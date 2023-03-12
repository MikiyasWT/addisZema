import {motion} from "framer-motion"
import { BackdropWrapper } from "../../style/Backdrop/backdropStyle";

const BackDrop = ({children,setShowDropDown}) => {

    return(
      <BackdropWrapper
      className="backdrop"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      onClick={()=>setShowDropDown((prev)=>!prev)}
      >
       
       {children}

      </BackdropWrapper>
    );
}

export default BackDrop;

