import React from "react";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import Split from 'react-split';
import {nanoid} from 'nanoid';
import {data} from './data'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Editor />
    </div>
  );
}

export default App;
