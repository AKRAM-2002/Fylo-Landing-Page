import logo from '../../images/logo.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header">
    <img src={logo} alt=" logo"  className='logo'/>

    <nav>
      <ul>
        <li>Features</li>
        <li>Team</li>
        <li>Sign in </li>
      </ul>
    </nav>

    </div>
  )
}
export default Navbar