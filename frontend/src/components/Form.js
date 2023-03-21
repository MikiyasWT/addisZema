import styled from "styled-components";
import {motion} from "framer-motion";
import {RightSideBarWrapper,SideBarStyle,AddingForm,FormDiv,FormLabels} from "../style/rightSideBar"
import {useFormik} from "formik";
import * as Yup from "yup";
import {addSong,deleteSong,updateSong} from "../redux/actions/songs";
import { showSideBar} from "../redux/actions/sideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectForEdit } from "../redux/actions/selectForEdit";

const Form = () => {


  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sideBar.sideBar)
  const songToBeEdited = useSelector(state => state.selectedEdit.selectedForEdit)

  const checkIfNewOrExisting = async (song) =>{
    if(songToBeEdited){
      await dispatch(updateSong(song[0]))
      await dispatch(selectForEdit(null))
      
    } 

    return dispatch(addSong(song[0]));
  }
        //form handling with formik and yup validation
     
        
        const formik = useFormik({
          initialValues:songToBeEdited?songToBeEdited:{
              title:"",
              artist:"",
              album:"",
              genre:""
            },
 

            
      
            validationSchema: Yup.object({
               title:Yup.string()
                       .max(20,"Song title can't exceed 20 characters")
                       .min(4,"Song title can't be lessthan 4 characters")
                       .required("Name is required"),
               artist:Yup.string()
                        .min(3,"Artist/s name can't be less than 3 characters")
                        .max(30,"Artist/s name can't exceed 30 characters")
                        .required(),
               album:Yup.string()
                          .min(3,"Album name can't be less than 3 characters")
                          .max(15,"Album name can't exceed 15 characters")
                          .required(),
               genre:Yup.string()
                        .min(3,"Genre can't be less than 3 characters")
                        .max(15,"Genre can't exceed 15 characters")
                        .required()                          
            }),
      
            //on form submission
            onSubmit:(values,{resetForm}) => {
              
              const song = [];
              song.push(values);
              checkIfNewOrExisting(song);
              dispatch(showSideBar((prev)=>!prev));
              resetForm({values:''});
             },
      
          })
    return (
        <RightSideBarWrapper 
        animate={{opacity:1}}
        initial={{opacity:0 }}
        exit={{opacity:0}}
        onClick={()=>dispatch(showSideBar((prev)=>!prev))}
        >
  
  <SideBarStyle 
      initial={{x:'50%'}}
      animate={{x:'0%'}}
      transition={{type:"tween"}}
      exit={{x:'50%'}}
      onClick={(e)=>e.stopPropagation()}>          
     
     <Title>
       <h3>Add New Song</h3>
     </Title>
      
  <AddingForm>

      <form onSubmit={formik.handleSubmit}>
       <InputDiv>
          <div>
            <FormLabels htmlFor="title" color={formik.touched.title && formik.errors.title? "red":"black"}>{formik.touched.title && formik.errors.title?formik.errors.title:'Song title'}</FormLabels>
          </div>
          <div>
            <input type="text"
             name="title"
             placeholder="Enter Song title"
             value={formik.values.title}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
          </div>
       </InputDiv>  

      <InputDiv>
          <div>
            <FormLabels htmlFor="artist" color={formik.touched.artist && formik.errors.artist? "red":"black"}>{formik.touched.artist && formik.errors.artist?formik.errors.artist:'Artist/s Name'}</FormLabels>
          </div>
          <div>
            <input type="text"
             name="artist"
             placeholder="Artist/s name"
             value={formik.values.artist}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
          </div>
       </InputDiv>

       <InputDiv>
          <div>
            <FormLabels htmlFor="album" color={formik.touched.album && formik.errors.album? "red":"black"}>{formik.touched.album && formik.errors.album?formik.errors.album:'Album Name'}</FormLabels>
          </div>
          <div>
            <input type="text"
             name="album"
             placeholder="Album name"
             value={formik.values.album}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
          </div>
       </InputDiv>





      <InputDiv>
          <div>
             <FormLabels htmlFor="genre" color={formik.touched.genre && formik.errors.genre? "red":"black"} >{formik.touched.genre && formik.errors.genre?formik.errors.genre:'Genre'}</FormLabels>
          </div>
          <div>
             <input
              type="text"
              name="genre"
              placeholder="Song's genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
          </div>
       </InputDiv>

       <ButtonsContainer>
            <FormButtons type="reset" color="red" >reset</FormButtons>
            <FormButtons type="submit" color="green">Add</FormButtons>
       </ButtonsContainer>



          
        
      </form>

  </AddingForm>
  </SideBarStyle>
  
</RightSideBarWrapper>
        )
}

export default Form;



//const Faq = styled(About)``


const FormButtons = styled.button`
    background:${props => props.color};
    color:white;
    font-size:1rem;
    padding:1rem 0rem;
    padding-bottom:2rem;
    margin:1rem 1rem;
    width: 40%;
    cursor:pointer;
    border:none 2px;
    border-radius:3px;
    max-height:3vh;
   
   
  `;

const ButtonsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
margin: 0px 0px;
padding:0px 0px;
`;



const InputDiv = styled.div`

width:100%;
padding:0.5rem 0.5rem;
display:flex;
flex-direction:column;
margin-bottom:0.5px;

div {
  margin-bottom: 0.5rem;
}

div > label {
  font-family:'Poppins', sans-serif;
  font-size:17px;
}

div > Input , div > select {
  min-height: 2.5rem;
  width:100%;
  margin:0rem 0rem;
  border:solid lightgray 2px;
  border-radius:5px;

  &:focus {
  border-color:solid lightgreen 5px;
  }

}

`;

const Title = styled.div`
margin: 0rem 2rem;
justify-items:center;

h3 {
  font-family:'Poppin',sans-serif;
  font-size: 20px;
}
`