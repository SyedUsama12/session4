import React, {useState}from 'react';
import Home from './home.js';
import './App.css';
function App () {
  var  [a, seta] = useState(0);
  var [b, setb] = useState(true)
  return (  
    
    <div className={`box ${b ? 'dayLight' : ''}`}>
     <h1 className= 'font' > Day Status= { b? 'Morning' : 'Night'}   </h1>
     <Home counter={a} />


<br/>
<button onClick= {
  ()=> seta(++a)
} 
>

  Click To Add
</button>
<button onClick= {
  ()=> setb(!b)
}  >Update Morning</button>


   </div>


  )
};



   



export default App;
