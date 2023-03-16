import {motion} from "framer-motion"
import { BackdropWrapper } from "../../style/Backdrop/backdropStyle";

const BackDrop = ({children,setDeleteConfirmModal}) => {

    return(
      <BackdropWrapper
      className="backdrop"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      onClick={()=>setDeleteConfirmModal((prev)=>!prev)}
      >
       
       {children}

      </BackdropWrapper>
    );
}

export default BackDrop;

