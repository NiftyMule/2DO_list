import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: createMuiTheme({
        palette: {
          primary: {
            light: '#1769aa',
            main: '#2196f3',
            dark: '#4dabf5',
            contrastText: '#fff',
          },
          secondary: {
            light: '#b2102f',
            main: '#ff1744',
            dark: '#ff4569',
            contrastText: '#fff',
          },
        },
      }),
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme} className="App">
        <NavBar/>
        <TodoList/>
      </MuiThemeProvider>
    );
  }
}

export default App;
