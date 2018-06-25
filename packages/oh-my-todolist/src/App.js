import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/header';
import ListPage from 'pages/list-page';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: "todoist" }}>
          <div className="oh-my-todolist">
              <Header />
              <ListPage />
          </div>
      </ThemeProvider>
    );
  }
}

export default App;
