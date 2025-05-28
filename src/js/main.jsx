import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//Components
import Counter from './components/Counter';

setInterval(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
      <Counter/>
    </div>,
)
}
,100000
)

