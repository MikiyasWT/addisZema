import {motion} from "framer-motion"
import { BackdropWrapper } from "../../style/Backdrop/backdropStyle";

const BackDrop = ({children,setDeleteConfirmModal,setDisplayStats}) => {
const checkChildren = (setDeleteConfirmModal,setDisplayStats) =>{
  if(setDeleteConfirmModal) return  setDeleteConfirmModal((prev)=>!prev)
  if(setDisplayStats)return setDisplayStats((prev)=>!prev);
  return
}
    return(
      <BackdropWrapper
      className="backdrop"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      onClick={()=>checkChildren(setDeleteConfirmModal,setDisplayStats)}
      >
       
       {children}

      </BackdropWrapper>
    );
}

export default BackDrop;

