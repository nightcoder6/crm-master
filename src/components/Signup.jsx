import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import PropTypes from 'prop-types';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      // Clear previous error
      setError('');
      
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });

      // Handle success
      console.log('Signup successful:', response.data);
      setSuccess(true);
    } catch (err) {
      // Handle error
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
      {success && <p style={{ color: 'green' }}>Signup successful! You can now <Link to="/login">Login</Link>.</p>} {/* Display success message */}
      {!success && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="form-btn">Signup</button>
        </form>
      )}
      <p>
        Already have an account?{' '}
        <Link to="/login" className="switch-btn">
          Login here
        </Link>
      </p>
    </div>
  );
};

Signup.propTypes = {
  onSwitchToLogin: PropTypes.func,
};

export default Signup;