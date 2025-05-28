import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

function SimpleCounter(props){
  return (<div className="bigCounter">
    <div className="calendar">
      <i className="fa-regular fa-clock"></i>
    </div>
    <div className="six">{props.digitSix}</div>
    <div className="five">{props.digitFive}</div>
    <div className="four">{props.digitFour}</div>
    <div className="three">{props.digitThree}</div>
    <div className="two">{props.digitTwo}</div>
    <div className="one">{props.digitOne}</div>
  </div>);
}

let counter = 0;
setInterval(function(){
  const six = Math.floor(counter/1000000)
  const five = Math.floor(counter/100000)
  const four = Math.floor(counter/10000)
  const three = Math.floor(counter/1000)
  const two = Math.floor(counter/100)
  const one = Math.floor(counter/10)
  console.log(six, five, four, three, two, one)
  ReactDOM.createRoot(rootElement).render(
    <SimpleCounter digitOne={counter.indexOf()} />,
    document.querySelector('#app')
);
},100000);


const rootElement = document.getElementById('root')
