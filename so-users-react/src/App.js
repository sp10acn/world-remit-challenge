import React, { Component } from 'react';
import './App.css';
import { AppBar } from 'material-ui';
import Main from './components/main/Main';

class App extends Component {
  render() {
    const titleStyles = {
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center"
    };
    
    return (
      <div>
        <AppBar 
          style={titleStyles} 
          title="A List of StackOverflow Users"
          showMenuIconButton={false} />
          <Main />
      </div>
    );
  }
}

export default App;
