import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import { SimpleCounter } from './components/SimpleCounter';

let counter = 0
let root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  const six = Math.floor(counter / 100000)
  const five = Math.floor(counter / 10000)
  const four = Math.floor(counter / 1000)
  const three = Math.floor(counter / 100)
  const two = Math.floor(counter / 10)
  const one = Math.floor(counter / 1)
  counter++

  root.render(
    <React.StrictMode>
      <SimpleCounter digitSix={six} digitFive={five} digitFour={four} digitThree={three} digitTwo={two} digitOne={one} />
    </React.StrictMode>,
  )
}, 1000)