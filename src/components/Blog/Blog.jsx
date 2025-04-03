import React, {useEffect} from 'react'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme (optional)
import "prismjs/components/prism-c";
import { snippet } from './snippet';
import "./Blog.css"

const Blog = () => {



  useEffect(() => {
    Prism.highlightAll(); // Apply Prism highlighting when the component mounts
  }, []);
  return (
    <section className="blog-section">
      <header className="blog-header">
        <h1 className="header-h1">Hello</h1>
        <h1 className="header-h1">World</h1>
      </header>
      <article className="description-section">
        <p className="description-p">
          A classic, simple computer program that outputs the phrase <span className="white-bg-dark-text">"Hello, World!"</span> It's a common starting point for learning programming, used to illustrate the basic syntax of a language.
        </p>
      </article>
      <section className="code-section-parent">
      {snippet.map(step=>(
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