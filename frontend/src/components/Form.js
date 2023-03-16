import styled from "styled-components";
import {motion} from "framer-motion";
import {RightSideBarWrapper,SideBarStyle,AddingForm,FormDiv,FormLabels} from "../style/rightSideBar"
import {useFormik} from "formik";
import * as Yup from "yup";


const Form = ({setAddFormStatus}) => {

        //form handling with formik and yup validation
        const formik = useFormik({
            initialValues: {
              name:"",
              dob:"",
              gender:"male",
              salary:9000
            },
      
            validationSchema: Yup.object({
               name:Yup.string()
                       .max(20,"Name can't exceed 20 characters")
                       .min(4,"Name can't be lessthan 4 characters")
                       .required("Name is required"),
               dob:Yup.string()
                      .required(),
               gender:Yup.string()
                          .default("male")
                          .required(),
               salary:Yup.number()
                        .min(9000,"Net Salary can't be less than 9000birr")
                        .max(78000,"Net salary can't exceed 78000 birr company scale")
                        .required()                          
            }),
      
            //on form submission
            onSubmit:(values,{resetForm}) => {
              
              const employee = [];
              employee.push(values);
              //dispatch(addEmployee(employee[0]))
             
              resetForm({values:''})
             },
      
          })
    return (
        <RightSideBarWrapper 
        animate={{opacity:1}}
        initial={{opacity:0 }}
        exit={{opacity:0}}
        onClick={()=>setAddFormStatus((prev)=>!prev)}
        >
  
  <SideBarStyle 
      initial={{x:'50%'}}
      animate={{x:'0%'}}
      transition={{type:"tween"}}
      exit={{x:'50%'}}
      onClick={(e)=>e.stopPropagation()}>          
     
     <Title>
       <h3>Add an Employee</h3>
     </Title>
      
  <AddingForm>

      <form onSubmit={formik.handleSubmit}>
       <InputDiv>
          <div>
            <FormLabels htmlFor="name" color={formik.touched.name && formik.errors.name? "red":"black"}>{formik.touched.name && formik.errors.name?formik.errors.name:'Employee Name'}</FormLabels>
          </div>
          <div>
            <input type="text"
             name="name"
             placeholder="Enter Employee Name"
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
          </div>
       </InputDiv>  

      <InputDiv>
          <div>
            <FormLabels htmlFor="dob" color={formik.touched.dob && formik.errors.dob? "red":"black"}>{formik.touched.dob && formik.errors.dob?formik.errors.dob:'Date of Birth'}</FormLabels>
          </div>
          <div>
            <input type="Date"
             name="dob"
             placeholder="Employee Date of Birth"
             value={formik.values.dob}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             />
          </div>
       </InputDiv>


      <InputDiv>
          <div>
            <FormLabels htmlFor="gender" color={formik.touched.gender && formik.errors.gender? "red":"black"}>{formik.touched.gender && formik.errors.gender?formik.errors.gender:'Gender'}</FormLabels>
          </div>
          <div>

          
          <select
           value={formik.values.gender}
           onChange={formik.handleChange}
           required
           name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          </div>
       </InputDiv>


      <InputDiv>
          <div>
             <FormLabels htmlFor="salary" color={formik.touched.salary && formik.errors.salary? "red":"black"} >{formik.touched.salary && formik.errors.salary?formik.errors.salary:'Salary'}</FormLabels>
          </div>
          <div>
             <input
              type="Number"
              name="salary"
              placeholder="Employee's Salary"
              value={formik.values.salary}
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