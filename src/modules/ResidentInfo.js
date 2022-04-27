const ResidentInfo=({name,status,origen,episodes,species,image})=>{

const statusBlink= ()=>{                                        //This const hands the status led of the residents,changing according to the information received.
    if(status==='Alive'){
        return '🟢'
    }
    else if( status==='Dead'){
        return '🔴'   }
        else{
            return '⚪'
        }
}





    return(
     <div className="boxResident">
         <div className="imgResident">
           <img className="imgRes" src={image} alt='Not Loaded'/>

          </div>

          <div className="boxResidentInfo">
             <div className="statusRow">     
                <span className="blink"> {statusBlink()} </span> <span>{status}</span>
             </div>   
           
              
            <h3 className="color-text text-shadow">{name}</h3>
            <span>{species}</span>     
            
            <h4>Origen</h4>
            <span>{origen}</span>
            <h4>Episodes apper</h4>
            <span>{episodes}</span>
          </div> 
         
    </div>
    )


}



export default ResidentInfo