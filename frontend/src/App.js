import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import CoverContainer from './components/CoverConatiner';
import PlayControl from './components/PlayControl';
import Library from './components/Library';
import { useState } from 'react';
import { GlobalStyle } from './style/GlobalStyles';
import Modal from './components/Modal';
import Form from './components/Form';

function App() {

 const [toggle,setToggle] = useState(false)
 const [selected,setSelected] = useState(false); 
 const [showDropDown,setShowDropDown] = useState(false)
 const [deleteConfirmModal,setDeleteConfirmModal] = useState(false)
 const [addFormStatus,setAddFormStatus] = useState(false)
 
 return (
    <div>
      <header>
        <GlobalStyle />
        { deleteConfirmModal &&
           <Modal setDeleteConfirmModal={setDeleteConfirmModal}/>
        }
         <Nav toggle={toggle} setToggle={setToggle} setAddFormStatus={setAddFormStatus}/>
         <CoverContainer 
           selected={selected}
           setSelected={setSelected}
           toggle={toggle}/>
         <PlayControl toggle={toggle} selected={selected} setSelected={setSelected}/>
         <Library 
           deleteConfirmModal={deleteConfirmModal}
           setDeleteConfirmModal={setDeleteConfirmModal}
           showDropDown={showDropDown}
           setShowDropDown={setShowDropDown}
           selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
      </header>
      { addFormStatus &&
        <Form setAddFormStatus={setAddFormStatus} />
        } 
    </div>
  );
}

export default App;
