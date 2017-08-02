import React, { PureComponent } from 'react';
import CreateGameButton from './CreateGameButton'

class Lobby extends PureComponent {
  render() {
    return (
      <div>
        <h1>Lobby</h1>
        <CreateGameButton />
      </div>
    );
  }
}

export default Lobby
