import React, {useEffect} from 'react'
import {Title,Description,CodeSection} from "./components"
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme (optional)
import "prismjs/components/prism-c";
import { snippet1 } from './snippets/snippet1';
import { snippet2 } from './snippets/snippet2';
import {useParams,Link} from "react-router-dom"
import "./Blog.css"

const Blog = () => {
  const snippets = [
    {id:1,snippet:snippet1},
    {id:2,snippet:snippet2},
  ]
  const params = useParams();

  console.log(params);

  const snippet = snippets[params.id-1].snippet;




  useEffect(() => {
    Prism.highlightAll(); // Apply Prism highlighting when the component mounts
  }, []);
  return (
    <section className="blog-section">
      <div className="site-logo-link-div">
      <Link className="site-logo-link" to="/">0x4C-LL</Link>
      </div>
   
      <Title title={snippet.title}/>
      <Description description={snippet.description}/>
      <section className="code-section-parent">
      {snippet.codesnippets.map(step=>(
 <CodeSection step={step} key={step.id}/>
      ))}
     </section>


     



    </section>
  )
}

export default Blog