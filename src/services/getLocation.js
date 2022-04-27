import axios from "axios"

const GetUniverse= async (location)=>{
   const URL=`https://rickandmortyapi.com/api/location/?name=${location}`
   const request= await axios.get(URL)
   
      return request

}

export default GetUniverse