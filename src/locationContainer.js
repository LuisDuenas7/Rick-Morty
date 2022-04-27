
import axios from "axios"
import { useState,useEffect } from "react"
import LocationInfo from "./modules/LocationInfo"
import ResidentContainer from "./modules/ResidentContainer"

const LocationContainer = (url)=>{                                                  


const[type,setType]=useState('')                                              //with these useStates, hands the information of the residents
const[dimension,setDimension]=useState('')                                            
const[name,setName]=useState('')
const[resident,setResident]=useState('')
const[residents,setResidents]=useState([])


const showResident= residents.slice(0,12)                                     // i limit the residents to show at 12 with the slice metod.


    useEffect(()=>{
      
    const promise =axios(url)                                                //with these promise i get the information of the residents.
       promise.then((res)=>{
       
           setType(res.data.type)
           setDimension(res.data.dimension)
           setResident(res.data.residents.length)
           setName(res.data.name)
           setResidents(res.data.residents)
           
        })
    },[url])
    

return(

     <div>
       <div>  
         <LocationInfo name={name} type={type} dimension={dimension} residents={resident}   />
         {/* here i give with promps the information the information received in the useEffect */}
      </div>
      
      <div className="column-resident">  
        {showResident.map((urlRes)=> (
           <ResidentContainer  key={urlRes} residents={urlRes}/>))}  
           {/* This return a mapping of the residents URL to work with they in the Resident container component */}
       </div>


    </div>

)


}

export default LocationContainer