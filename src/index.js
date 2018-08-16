import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './TodoList.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);