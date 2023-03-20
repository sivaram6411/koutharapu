// Write your code here
import './index.css'

const Login = props => {
  const {loginButton} = props

  return (
    <button className="button" type="button" onClick={loginButton}>
      Login
    </button>
  )
}

export default Login
