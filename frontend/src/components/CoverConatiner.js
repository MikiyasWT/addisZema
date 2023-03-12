import { Cover } from "../style/coverContainer";
import test from "../assets/images/test.jpg"
import {motion} from "framer-motion";

 const CoverContainer = ({toggle}) => {
   
   
    return (
        <Cover toggled={toggle?"toggled":""}>
 
            <motion.img 
            animate={{
               rotate: 360,
               duration:10
                }}
            src={test} alt="test cover image" />
     

            <h2>Teddy Afro</h2>
            <h3>Alamn ale ena lbe</h3>
         
        </Cover>
    )
}


export default CoverContainer;