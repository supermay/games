import React, { PureComponent } from 'react';
import CreateGameButton from './CreateGameButton'

class Lobby extends PureComponent {
  render() {
    return (
      <div>
        <CreateGameButton />
        <h1>Lobby</h1>
      </div>
    );
  }
}

export default Lobby
