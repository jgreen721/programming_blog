import React from 'react'
import {Header,About,Entries} from "./components"
import {fileHandlingImg, helloWorldImg} from "../../const"

import "./Dashboard.css";


const Dashboard = () => {
    const entries =[
        {id:1,title:"Hello World",img:helloWorldImg,blurb:"A programmers first step into a language."},
        {id:2,title:"File Handling - Basic",img:fileHandlingImg,blurb:"Learning the basics of file handling."},
      ]

  return (
    <div className="dashboard-content">
        <Header/>
            <div className="padded-parent-container">
                <About/>
                <Entries entries={entries}/>
            </div>
    </div>
  )
}

export default Dashboard