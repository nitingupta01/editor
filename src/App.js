import React   from "react";
import CodeEditor from "./CodeEditor";

import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <h1>React Code Syntax Highlighter</h1>
      <CodeEditor language="jsx" />
    </div>
  );
}
