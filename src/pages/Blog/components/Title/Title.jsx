import React from 'react'
import "./Title.css"

const Title = ({title}) => {
  return (
    <header className="blog-header">
    <h1 className="header-h1">{title}</h1>
  </header>
  )
}

export default Title