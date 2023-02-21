import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConstructionApp } from './ConstructionApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConstructionApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
