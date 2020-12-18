import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
const Counter = (props) => {
 const [counter, setCounter] = useState(0) ; // muutuja ja muutuja “setter”
 const updateCounter = (count) => {setCounter(Math.min(Math.max((count), 0), 10))} // funktsioon
 return ( 
  <div>
  <p>step:{props.step}</p>
  <button onClick = {function(){updateCounter(counter +(props.step))}}>+</button>
  <button onClick = {function(){updateCounter(counter -(props.step))}}>-</button>
  <p>{Math.round(counter*10)/10}</p>
  </div>
  ) // JSX
}


const App = () => {
return (
  <main>
    <h1>Counters</h1>
    <Counter step={1}></Counter>
    <Counter step={2}></Counter>
    <Counter step={0.1}></Counter>
  </main>
);
};
ReactDOM.render(<App />, document.getElementById('root'));



 /*</div>
ReactDOM.render(<App />, document.getElementById("root"));

/*
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter = (props) => {
  return (<button onClick={props.nameFunction}>YEP</button>);
}
  
const App = () => {

  const [name, setName] = useState("EEE");
  const [hasNameChange, setHasNameChanged] = useState(false);

  useEffect(() => {
    console.log("suk")
    if (name !== "EEE") {setHasNameChanged(true)};
  },[name]);

  const changeName = () =>{
    setName("YES")
  }

  return(
    <div>
    <h1>React,{name} </h1>
    <Button nameFunction={changeName} />
    {hasNameChange ? (<p>namehaschanged</p>) : (null)}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));

*/

