import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/global.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('oh-my-todolist'));
registerServiceWorker();
