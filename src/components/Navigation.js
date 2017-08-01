import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import GroupWorkIcon from 'material-ui/svg-icons/action/group-work'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  signUp() {
    this.props.push('/sign-up')
  }

  goHome() {
    this.props.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Gomoku (Five-in-a-row)"
        iconElementLeft={<IconButton onClick={this.goHome.bind(this)}><GroupWorkIcon /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.props.signOut} /> :
          <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { push, signOut })(Navigation)
