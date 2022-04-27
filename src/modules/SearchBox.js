import { useState,useEffect } from "react"
import GetUniverse from "../services/getLocation"
import LocationContainer from "../locationContainer"


const random = Math.floor(Math.random() * 108) + 1;                  // This random const return a random number to load a random location every time the app load.
 
const SearchBox= ()=>{
const[inputValue,SetInputValue]=useState('')
const[location,setlocation]=useState([])
const[url,setUrl]=useState(
  `https://rickandmortyapi.com/api/location/${random}`
)





  useEffect(()=>{                                                      //  This useEffect give information to getLocation component and return the data to share to the others components.
     GetUniverse(inputValue)                                                     
       .then((response)=>{
          setlocation(response.data.results.slice(0,9))
          

       })
       .catch((err)=>{
         console.error(err)
               })
  },[inputValue])
 
  onclick=()=> {                                                          //This onclick return the input field to default empty string.
  SetInputValue('');
   }

  const list= location.map((value)=> <button onClick={()=> {setUrl(value.url)} } key={value.name}>{value.name}</button>);                //This const list mapping the location information
                                                                                                                                         //who comes from the useeffect.
return(
   <div >
    <div className="searchBox">             
      <input  type='text' value={url ? inputValue : '' } placeholder='Input a location  ⚠ ...' onChange={(e)=> {SetInputValue(e.target.value)}}/>   
      {inputValue ? list : '' }  
{/*    this its main input sets the input value to find a location with the getLocation service */}

    </div>
     <LocationContainer url={url}/>
        {/* Here are sharing with the URL props the information to work in the location container */}
   </div>
)
}

export default SearchBox