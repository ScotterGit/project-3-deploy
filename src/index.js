import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Go to the grocery", completed: true },
    { id: "todo-1", name: "Work on project", completed: false },
    { id: "todo-2", name: "Not get covid", completed: false }
  ];

  ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
