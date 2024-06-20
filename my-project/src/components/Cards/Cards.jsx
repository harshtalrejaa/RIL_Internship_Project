import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const Card = ({ title, description, imageSource, id }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const cardStyle = {
    width: '300px',
    height: '400px',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    border: '1px solid #dee2e6',
    backgroundColor: '#f8f9fa', // Subtle color example
  };

  const logoStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  };

  const headerTextStyle = {
    marginBottom: '10px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '5px',
    color: '#343a40',
    textAlign: 'center',
  };

  const descriptionStyle = {
    color: '#6c757d',
    lineHeight: '1.4',
    marginBottom: '15px',
    textAlign: 'center',
    flex: '1',
    padding: '0 10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    alignSelf: 'center',
    marginBottom: '10px',
  };

  const handleClick = () => {
    if (isSignedIn) {
      // Navigate to the appropriate route if the user is signed in
      navigate(`/${id}/${title}/`);
      console.log('Navigate to the form builder page');
    } else {
      // Show an alert if the user is not signed in
      alert('Please log in');
    }
  };

  return (
    <section style={cardStyle}>
      <div>
        <img
          src="/src/assets/Jio.png" // Replace with your logo image source
          alt="Logo"
          style={logoStyle}
        />
        <div style={headerTextStyle}>
          <h2 style={{ color: '#007bff' }}>Jio Network Academy</h2>
          <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>presents</p>
        </div>
      </div>
      <div>
        <h1 style={titleStyle}>{title}</h1>
      </div>
      <div>
        <p style={descriptionStyle}>{description}</p>
      </div>
      <button
        type="button"
        style={buttonStyle}
        onClick={handleClick}
      >
        Apply Now
      </button>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired, // Assuming this prop is still required but not used in this specific modification
  id: PropTypes.string.isRequired,
};

export default Card;
