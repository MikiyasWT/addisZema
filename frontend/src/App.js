import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import CoverContainer from './components/CoverConatiner';
import PlayControl from './components/PlayControl';
import Library from './components/Library';
import { useState } from 'react';
import { GlobalStyle } from './style/GlobalStyles';

function App() {

 const [toggle,setToggle] = useState(false)
 const [selected,setSelected] = useState(false); 
  return (
    <div>
      <header>
        <GlobalStyle />
         <Nav toggle={toggle} setToggle={setToggle}/>
         <CoverContainer 
           selected={selected}
           setSelected={setSelected}
           toggle={toggle}/>
         <PlayControl toggle={toggle} selected={selected} setSelected={setSelected}/>
         <Library selected={selected} setSelected={setSelected} toggle={toggle} setToggle={setToggle}/>
      </header>
    </div>
  );
}

export default App;
