
import './App.css';
import SearchBox from './modules/SearchBox';
import img from './img/rm.png'
import {useState} from 'react' 
import Spinner from './modules/spinner';



                                                                                            //This its the main content of the app.

function App() {

  const[isLoading,setIsLoading]=useState(false)                                             //I create a timeout for show the spinner of loading. 
 
  setTimeout(() => {
    setIsLoading(true)
  }, 2500);

 
if(isLoading){                                                                              //this if conditional, hands the main app or the spinner loading page.
  return (    
    <div className="App">
        <img className='img-RM' src={img} alt='img'/>
        <SearchBox/>                                                                                       
        <footer className='footer'>Luis Dueñas Development 2022 ®</footer>
    </div>);
    
  }
  
else{
  return(
    <Spinner spinner={img}/>

)}}

export default App;


