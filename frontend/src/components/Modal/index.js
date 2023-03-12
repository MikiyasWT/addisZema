import {motion, spring} from "framer-motion"
import { ModalStyle,Buttons } from "../../style/Modal/modalStyle";
import BackDrop from "../Backdrop";
import deleteicon from "../../assets/images/deleteicon.jpg";


const modalDropIn  = {
    hidden:{y:"-500vh",opacity:0},
    show:{
        y:0,
        opacity:1,
        transition:{
            type:"spring",
            damping:25,
            duration:0.1}
        }
}

const Modal = ({setShowDropDown,handleClose,text}) => {

    return(
      <BackDrop setShowDropDown={setShowDropDown}>
         <ModalStyle
            variants={modalDropIn}
            initial="hidden"
            animate="show"
            onClick={(e)=> e.stopPropagation()}>

           <div>
            <img src={deleteicon} alt="deleteicon"/>
           </div>
           <div className="confirmationbox">
            <h2>Are you Sure</h2>
            <p>Do you really wants to delete this song? THis process can't be undone.</p>
           </div>
           <Buttons>
            <button style={{background:'#6573bd'}} onClick={()=>setShowDropDown((prev) => !prev)}>Cancel</button>
            <button style={{background:'#ed4d26'}}>Delete</button>
           </Buttons>
         </ModalStyle>
      </BackDrop>
    );
}

export default Modal;