import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import CoverContainer from './components/CoverConatiner';
import PlayControl from './components/PlayControl';
import Library from './components/Library';
import { useState } from 'react';

function App() {

 const [toggle,setToggle] = useState(false) 
  return (
    <div>
      <header>
         <Nav toggle={toggle} setToggle={setToggle}/>
         <CoverContainer toggle={toggle}/>
         <PlayControl toggle={toggle}/>
         <Library toggle={toggle} setToggle={setToggle}/>
      </header>
    </div>
  );
}

export default App;
