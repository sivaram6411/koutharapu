// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isCond: true}

  onLogin = () => {
    this.setState(prevLogin => ({isCond: !prevLogin.isCond}))
  }

  render() {
    const {isCond} = this.state

    return (
      <div className="container">
        <div className="message-container">
          {isCond ? (
            <Message message="Please Login" />
          ) : (
            <Message message="Welcome User" />
          )}

          {isCond ? (
            <Login loginButton={this.onLogin} />
          ) : (
            <Logout loginButton={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
