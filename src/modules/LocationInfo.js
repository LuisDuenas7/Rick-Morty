const LocationInfo =({name,type,dimension,residents})=>{

                      //This component only show the information received in the location container.
    return(
 <div className="boxLocationInfo">       
     
     <div className="boxLocationTitule">
        <div>    
                <h2 className="tituleName text-shadow">{name} </h2> 
        </div>

      <div className="locationInfo">  
      
      <div className="statusRow">     
                <span className=""> Dimension :</span> <span>  {type}</span>
      </div>   
      
      <div className="statusRow">     
                <span className=""> Type : </span> <span>{dimension}</span>
      </div>
     

      <div className="statusRow">     
                <span className=""> Residents : </span> <span>{residents}</span>
      </div>
        
        
    </div>

     </div>

</div>

    )
}

export default LocationInfo
