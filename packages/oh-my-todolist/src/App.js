import React, { Component } from 'react';
import 'normalize.css';
import './App.less';
import ListPage from 'pages/list-page';

class App extends Component {
  render() {
    return (
      <div className="oh-my-todolist">
        <ListPage />
      </div>
    );
  }
}

export default App;
