import { Dashboard,Blog } from './pages'
import {Footer} from "./components"
import {Routes,Route} from "react-router-dom"
import './App.css'


function App() {


  return (
    <div className="app">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
