import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

import "./Entries.css"

const Entries = ({entries}) => {
        const navigate = useNavigate();

    const handleViewEntry=(id)=>{
        window.scrollTo({top:0,left:0});
        navigate(`/blog/${id}`);
    }
  return (
    <ul className="blog-entries">
        <h2 className="blog-entries-title">Articles</h2>
            {entries.map(section=>(
            <li key={section.id} className="blog-entry">
                <div className="blog-entry-thumbnail-div">
                    <img width="150" height="150" className="blog-entry-thumbnail" src={section.img} alt="" />
                </div>
                <div className="blog-entry-content">
                    <h3 className="blog-entry-title">{section.title}</h3>
                    <h5 className="blog-entry-description">{section.blurb}</h5>
                    <button onClick={()=>handleViewEntry(section.id)} className="blog-link-btn">Read</button>
                    {/* <Link className="blog-link-btn" to={`/blog/${section.id}`}>Read</Link> */}
                </div>
            </li>
            ))}
    </ul>
    )
}

export default Entries