import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import CoverContainer from './components/CoverConatiner';
import PlayControl from './components/PlayControl';
import Library from './components/Library';
import { useEffect, useState } from 'react';
import { GlobalStyle } from './style/GlobalStyles';
import Modal from './components/Modal';
import Form from './components/Form';
import { useDispatch, useSelector } from 'react-redux';
import Stats from './components/Stats';

function App() {

 const [toggle,setToggle] = useState(false)
 const [selected,setSelected] = useState(false); 
 const [showDropDown,setShowDropDown] = useState(false);
 const [deleteConfirmModal,setDeleteConfirmModal] = useState(false);
 const [addFormStatus,setAddFormStatus] = useState(false);
 const [displayStats,setDisplayStats] = useState(false);


//  const dispatch = useDispatch();
//  const songs = useSelector(state => state.songs.songs);
//  const song = useSelector(state => state.songs.song);
//  useEffect(() => {
//       dispatch(getSongs())
//       console.log(songs)
//  },[])
const sidebarStatus = useSelector((state) => state.sideBar.sideBar)
 return (
    <div>
      <header>
        <GlobalStyle />
        { deleteConfirmModal &&
           <Modal setDeleteConfirmModal={setDeleteConfirmModal}/>
        }{
          displayStats && <Stats setDisplayStats={setDisplayStats}/>
        }
         <Nav toggle={toggle} setToggle={setToggle} setDisplayStats={setDisplayStats}/>
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
      { sidebarStatus &&
        <Form />
        } 
    </div>
  );
}

export default App;
