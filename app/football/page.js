import { getAllTeams } from "../_actions/action"
import Image from 'next/image';


const footballPage =  async() => {

    const data= await getAllTeams();
    const imagePath = await data.data[0].image_path;


  return (
    <> 
    
    
    <div>footballPage</div>

     <Image
      src={imagePath}
      alt="Rangers"
      width={100}
      height={100}
    /> 
    
    
     </>
  )
}

export default footballPage