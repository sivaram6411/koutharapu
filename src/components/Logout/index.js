// Write your code here
import './index.css'

const Logout = props => {
  const {loginButton} = props
  return (
    <button className="button" type="button" onClick={loginButton}>
      Logout
    </button>
  )
}

export default Logout
