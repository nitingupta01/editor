import React, { useState, useEffect ,useRef } from "react";
import Prism from "prismjs";

const CodeEditor = (props) => {
    const [content, setContent] = useState(`import React   from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Code Syntax Highlighter</h1>
    </div>
  );
}
`);

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    
    const handleScroll = (sourceDiv, targetDiv) => {
      if (sourceDiv.current && targetDiv.current) {
        targetDiv.current.scrollTop = sourceDiv.current.scrollTop;
      }
    };
  
    useEffect(() => {
      const div1 = div1Ref.current;
      const div2 = div2Ref.current;
  
      const handleDiv1Scroll = () => handleScroll(div1Ref, div2Ref);
      const handleDiv2Scroll = () => handleScroll(div2Ref, div1Ref);
  
      if (div1 && div2) {
        div1.addEventListener('scroll', handleDiv1Scroll);
        div2.addEventListener('scroll', handleDiv2Scroll);
      }

    }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="code-edit-container">
      <textarea
        className="code-input"
        value={content}
        onChange={(evt) => setContent(evt.target.value)}
        ref={div1Ref}
      />
      <pre className="code-output" >
        <code className={`language-${props.language}`} style={{
          whiteSpace: 'pre-wrap', 
          wordWrap: 'break-word', 
          maxWidth: '100%',
        }}ref={div2Ref}>{content}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
