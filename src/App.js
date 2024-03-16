
import { useState } from 'react';
import './App.css';


function App() {
//useState uses
//useState is a hook in React that allows you to add state to functional components.
// In simple words, it's a way to store and manage the state of your component. 

 let[count,setcount]=useState(1)
 let[Mcount,setMcount]=useState(100)
 const[press,setpress]=useState(0)
  
  let display=()=>{
    setcount(count+1)
  }

  let Mdisplay=()=>{
    setMcount(Mcount-1)
  }

  let displaypress=()=>{
    setpress(press+2)
  }


  
  return (
    <div className="App">
      <h1 className='mt-8'>increment decrement buttons</h1>
      <button className='bg-[red] p-[10px] mr-6' onClick={display}>Encrement click!!</button>
      {count}
      <button className='bg-[red] p-[10px] ml-6 m-4' onClick={Mdisplay} >decrement click !!</button>
      {Mcount}

      <h1 className='mt-11'>increse value if you are clicked...</h1>
      <button onClick={displaypress}>click this -- {press}</button>
    </div>
  );
}

export default App;
