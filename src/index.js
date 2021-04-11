import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Wear a mask", completed: true },
    { id: "todo-1", name: "Work on project", completed: false },
    { id: "todo-2", name: "Get a web dev job", completed: false }
  ];

  ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
