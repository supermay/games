import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';


class Lobby extends PureComponent {

  render() {
    return (
      <div className="Lobby">
        <h1>Lobby!</h1>
        <Paper className="paper">
          <Menu>
            Something here
          </Menu>
        </Paper>
      </div>
    )
  }
}

export default Lobby
