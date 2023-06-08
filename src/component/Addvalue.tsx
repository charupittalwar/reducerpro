import { useReducer } from "react";

type statetype = {

    username : "arc" 

    counter :number ;

    status:"increment "|"decrement" |"start";

}

type actiontype = {type :string}
const reducerfun = (state:statetype ,action:actiontype ) =>
{
    console.log("action " ,action)
switch (action.type) {
    case "increment":
        
        return { 
        ...state,
        counter:state.counter +1,

        status :action.type

        };

    case "decrement":

        return {

          ...state ,

          counter :state.counter - 1,

          status :action.type


        } ;

    default:
        
    return state
}



};



const initialstate :statetype={counter :0 , status :"start" , username :"arc"}
const Addvalue  = () => {

    const[state ,dispatch]= useReducer(reducerfun ,initialstate);

return (

<div>

user info<br></br>

<p>username : {state.username}</p>

<p>counter : {state.counter }</p> <br>
</br>

<p>status : {state.status}</p> <br></br>

 <button type = "button" onClick={() => {

    dispatch ({type:"increment"})
 }} >increment</button> <br></br>

<button type = "button" onClick={() => {

dispatch ({type:"decrement"})
}} >decrement</button>







</div>


)



}

export default Addvalue;