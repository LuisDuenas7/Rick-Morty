

const Spinner=({spinner})=>{
return(                                                        //this its the spinner loading page. recibes the image from the app.js
 <div className="spinner">
   <img className="spinner-size blink" src={spinner} alt="Loading..."/>
   <label className="color-text">Loading...</label>
  

 </div>


)

}

export default Spinner