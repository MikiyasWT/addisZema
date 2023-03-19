import {motion, spring} from "framer-motion"
import { ModalStyle,Buttons } from "../../style/Modal/modalStyle";
import BackDrop from "../Backdrop";
import deleteicon from "../../assets/images/deleteicon.jpg";
import { useDispatch, useSelector } from "react-redux";
import {deleteSong} from "../../redux/actions/songs";

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

const Modal = ({setShowDropDown,handleClose,text,deleteConfirmModal,setDeleteConfirmModal}) => {
  const dispatch = useDispatch()
  const selectedSong = useSelector(state => state.selectedForDelete.selectedForDelete)

  const deleteSelectedSong = () => {
    setDeleteConfirmModal((prev) => !prev);
    dispatch(deleteSong(selectedSong));
  }

  
    return(
      <BackDrop setDeleteConfirmModal={setDeleteConfirmModal}>
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
            <p>Do you really wants to delete {selectedSong.title}? THis process can't be undone.</p>
           </div>
           <Buttons>
            <button style={{background:'#6573bd'}} onClick={()=>setDeleteConfirmModal((prev) => !prev)}>Cancel</button>
            <button style={{background:'#ed4d26'}} onClick={()=>deleteSelectedSong()}>Delete</button>
           </Buttons>
         </ModalStyle>
      </BackDrop>
    );
}

export default Modal;