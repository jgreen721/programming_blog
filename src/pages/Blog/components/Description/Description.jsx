import React from 'react'
import "./Description.css"

const Description = ({description}) => {
  return (
    <article className="description-section">
        <p className="description-p">
            {description}
        </p>
  </article>
  )
}

export default Description