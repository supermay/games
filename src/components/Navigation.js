import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import fetchGames from '../actions/games/fetch'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import GroupWorkIcon from 'material-ui/svg-icons/action/group-work'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  signUp() {
    this.props.push('/sign-up')
  }

  signIn() {
    this.props.push('/sign-in')
  }

  goHome() {
    this.props.push('/')
  }

  signOutAndFetchGames() {
    this.props.signOut()
    this.props.fetchGames()
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Gomoku (Five-in-a-row)"
        iconElementLeft={<IconButton onClick={this.goHome.bind(this)}><GroupWorkIcon /></IconButton>}
        iconElementRight={signedIn ?
          <div className="SignSystem">
            <FlatButton label="Sign out" onClick={this.signOutAndFetchGames.bind(this)} />
          </div>
          :
          <div className="SignSystem">
            <FlatButton label="Sign in" onClick={this.signIn.bind(this)} />
            <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />
          </div>
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { push, signOut, fetchGames })(Navigation)
