import { useState } from 'react'
import {Header,Blog,Footer} from "./components"
import './App.css'

function App() {

  return (
    <div className="app">
      <div className="app-content">
      <Header/>
      <Blog/>
      <Footer/>
      </div>

    </div>
  )
}

export default App
