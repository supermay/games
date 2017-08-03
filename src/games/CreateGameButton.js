import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import createGame from '../actions/games/create'

class CreateGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <div className="CreateGameButton">
        <FloatingActionButton onClick={this.props.createGame}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createGame })(CreateGameButton)
