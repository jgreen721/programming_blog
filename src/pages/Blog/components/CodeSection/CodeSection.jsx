import React from 'react'
import "./CodeSection.css"

const CodeSection = ({step}) => {
  return (
    <div key={step.id} className="code-section">
    <div className="code-column">
    {step.code ? 
      <pre className="code-snippet">
        <code className={`language-${step.language}`}>
          {/* {`#import <stdio.h>`} */}
          {step.code}
        </code>
      </pre>
       :
       <div>
        <ul class="file-tree">
          <li>📁 {step.fileTree.name}
            <ul>
              {step.fileTree.files.map(file=>(
              <li> 📄 {file.name}</li>
              ))}
            </ul> 
            </li>
        </ul>

        </div>
}
    </div>
    <div className="comments-column">
      {/* <p>The first step, the 'beloved' import statement. This is telling the computer/chef which drawers/files we will be using.</p> */}
      <p className="code-description">{step.description}</p>
    </div>
  </div>
  )
}

export default CodeSection