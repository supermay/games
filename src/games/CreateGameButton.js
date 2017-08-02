import React, { PureComponent } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class CreateGameButton extends PureComponent {
  render() {
    return (
      <div className="CreateGameButton">
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

export default CreateGameButton
