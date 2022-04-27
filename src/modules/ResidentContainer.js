import { useEffect,useState } from "react"
import axios from "axios"
import ResidentInfo from "./ResidentInfo"

const ResidentContainer = ({residents})=>{

 
    const[locResidents,setLocResidents]=useState({});
   
   useEffect(()=>{
      if(residents){                                                 //with this use effect we get the information of every resident, and only renders when 
                                                                     //we are receiving data from the residents props(comes from the locationContainer)
          const promise= axios(residents)
            promise.then((res)=>{
         
            setLocResidents({
                name:res.data.name,
                status:res.data.status,
                species:res.data.species,
                image:res.data.image,
                origin:res.data.origin.name,
                episodes:res.data.episode.length

            })  


          })


      }


   },[residents])
                
 
 
 


   
    return(
       <div className="boxMainResidents">
          <ResidentInfo image={locResidents.image} name={locResidents.name} status={locResidents.status} origen={locResidents.origin} episodes={locResidents.episodes} species={locResidents.species} />
          {/* This are used to give information receiving from the useEffect to the residentInfo component */}
       </div>

    )}
   

export default ResidentContainer