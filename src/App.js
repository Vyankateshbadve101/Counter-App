import './App.css';
import { useState } from 'react';

const App = (props) => {

  var [flagone,setFlagOne]=useState(false);
  var [cnt,setCnt]=useState(0);

  const btnoneHandler=()=>{
    setFlagOne(true);
    setCnt(cnt+1);
    //console.log(props.Data);
  }
 

  return (
    <div>
    <div className="App">
    <h1 style={{color:"green"}}>Counter</h1>    
    </div>
    <div>
    {flagone && <p style={{textAlign:"center"}}> You Clicked {cnt} times </p>}
    </div>
    <div>
    <button onClick={btnoneHandler} 
    style={{position:"relative",
     left:"50%" , padding:"10px",
      borderRadius:"5px",
       color:"white",
       background:"blue",
       alignItems:"center" }} >
        Click Me</button>
    </div>
    </div>
  );
}

export default App;
