import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Addvalue from './component/Addvalue';

const reducerfun = (state :any ,action :any )=>{

  console.log("state" ,state);

  console.log ("action " ,action);
  switch (action.type) {
    case "increment" :

    const newstate = {
   ...state ,

   counter :state.counter+1 ,

   status : action.type

    }

      return newstate

      case "decrement":

      const newstate2 = {
      ...state,

      counter : state.counter -1 ,
      
      status :action.type

      }

      return newstate2
      
      default:

      return state
  }


};

const initialState = {counter :0 , status:''}

function App() {

  
  const [state , dispatch] = useReducer(reducerfun , initialState);

  const incrementvalue = () =>{

    console.log("increment " ,state)
console.log("increment value")

    dispatch  ({type: "increment"});
  }

  function decrementvalue() {

    console.log("decremet ", state);
    console.log("decrement value");
    
    dispatch  ({type: "decrement"});
    
  }

  return (

    
<div>

  <Addvalue ></Addvalue>

 { /* <br />

  <p>counter = {state.counter}</p> <br />
  

  <p>status = {state.status}</p>

<button type = "button"  onClick ={incrementvalue}>increment</button> <br></br>

  <button type = "button" onClick = {decrementvalue}>decrement</button> */}


</div>
  );
}

export default App;
