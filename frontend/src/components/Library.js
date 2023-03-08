import { LibraryStyle ,SideBar} from "../style/library";



const Library = ({toggle,setToggle}) => {

    return (
        <div>
         {
             toggle &&    
             <LibraryStyle>
             
                 <div className="library-songs ">
                     <div>
                        <h1>fgsdg</h1>
                     </div>
                     <div>
                        <h1>fgsdg</h1>
                     </div>

                     <div>
                        <h1>fgsdg</h1>
                     </div>
                     <div>
                        <h1>fgsdg</h1>
                     </div>
                     <div>
                        <h1>fgsdg</h1>
                     </div>
                     
                 </div>
            </LibraryStyle>
         }
 
      </div>  
     )
}

export default Library;