import React, {useState}from 'react';
import Home from './home.js';
import './App.css';
function App () {
  var  [a, seta] = useState(0);
  var  [b, setb] = useState(true)
  
  return (  
    
    <div className={`box ${b ? 'dayLight' : ''}`}>
     <h1 className= 'font' > Day Status= { b? 'Morning' : 'Night'}   </h1>
     
     <Home counter={a} />


<br/>
<button onClick= {
  ()=> seta(++a)
} 
> Add Count </button>
  <br/>

  <button onClick= {
  ()=> setb(!b)
}  >Change Day</button>


<br/>

<button onClick= {
  ()=> seta(--a)
}  >Decrease Count</button>






   </div>


  )
};



   



export default App;
