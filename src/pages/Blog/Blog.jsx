import React, {useEffect} from 'react'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme (optional)
import "prismjs/components/prism-c";
import { snippet1 } from './snippet1';
import { snippet2 } from './snippet2';
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

  console.log(snippet);



  useEffect(() => {
    Prism.highlightAll(); // Apply Prism highlighting when the component mounts
  }, []);
  return (
    <section className="blog-section">
      <div className="site-logo-link-div">
      <Link className="site-logo-link" to="/">0x4C-LL</Link>
      </div>
      <header className="blog-header">
        <h1 className="header-h1">{snippet.title}</h1>
      </header>
      <article className="description-section">
        <p className="description-p">
          {snippet.description}
        </p>
      </article>
      <section className="code-section-parent">
      {snippet.codesnippets.map(step=>(
      <div key={step.id} className="code-section">
        <div className="code-column">
          <pre className="code-snippet">
            <code className={`language-${step.language}`}>
              {/* {`#import <stdio.h>`} */}
              {step.code}
            </code>
          </pre>
        </div>
        <div className="comments-column">
          {/* <p>The first step, the 'beloved' import statement. This is telling the computer/chef which drawers/files we will be using.</p> */}
          <p className="code-description">{step.description}</p>
        </div>
      </div>
      ))}
     </section>


     



    </section>
  )
}

export default Blog