import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'
import Navigation from './components/Navigation'
import Board from './components/Board'
import Lobby from './games/Lobby'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          <Board />
          {/* <Lobby /> */}
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
