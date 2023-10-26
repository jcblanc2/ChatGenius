import React from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root');

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
