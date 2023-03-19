// Write your code here
import {Component} from 'react'
import './index.css'

import Login from './Login'
import Logout from './src/components/Logout'
import Message from './src/components/Message'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Message />
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
