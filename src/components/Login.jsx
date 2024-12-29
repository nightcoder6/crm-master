import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Clear previous error
      setError('');

      // Send login data to the backend
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // Handle success
      console.log('Login successful:', response.data);
      setSuccess(true);
    } catch (err) {
      // Handle error
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Invalid email or password!');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
      {success && <p style={{ color: 'green' }}>Login successful! Redirecting...</p>} {/* Display success */}
      {!success && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-btn">Login</button>
        </form>
      )}
      <p>
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="switch-btn">
          Signup here
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  onSwitchToSignup: PropTypes.func,
};

export default Login;