import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          ERM Page
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/login" className="btn login">
          Login
        </Link>
        <Link to="/signup" className="btn signup">
          Signup
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onShowHome: PropTypes.func,
  onShowLogin: PropTypes.func,
  onShowSignup: PropTypes.func,
};

export default Navbar;