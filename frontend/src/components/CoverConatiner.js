import { Cover } from "../style/coverContainer";
import test from "../assets/images/test.jpg"
 
 const CoverContainer = ({toggle}) => {
   
   
    return (
        <Cover toggled={toggle?"toggled":""}>
            
            <img src={test} alt="test cover image"></img>
            <h2>Teddy Afro</h2>
            <h3>Alamn ale ena lbe</h3>
         
        </Cover>
    )
}


export default CoverContainer;