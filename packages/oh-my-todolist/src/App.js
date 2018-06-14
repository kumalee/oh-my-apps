import React, { Component } from 'react';
import Header from 'components/header';
import ListPage from 'pages/list-page';

class App extends Component {
  render() {
    return (
      <div className="oh-my-todolist">
        <Header />
        <ListPage />
      </div>
    );
  }
}

export default App;
