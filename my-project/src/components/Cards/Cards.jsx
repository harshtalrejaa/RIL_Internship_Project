import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import './Cards.css';

const Card = ({ title, description, imageSource, id }) => {
  const navigate = useNavigate()
  const { isSignedIn } = useAuth();

  const handleClick = () => {
    if (isSignedIn) {
      // Navigate to the appropriate route if the user is signed in
      navigate(`/${id}/${title}/`)
      console.log('Navigate to the form builder page');
    } else {
      // Show an alert if the user is not signed in
      alert('Please log in');
    }
  };

  return (
    <section id='postings'>
      <div className="job-card">
          <img
            src="https://datam2.fmeextensions.com/media/catalog/product/cache/e7579725142091ed46026b6a0b927244/o/p/open_job_manager.png" // Use the imageSource prop here
            alt="Job"
            className="job-card-image"
          />
          <div class="job-card-text">
            <h1 class="title">{title}</h1>
            <p class="description">{description}</p>
          </div>
          <button type="button" class="jobcard-apply-button"  onClick={handleClick}>
              Apply
            </button>
        </div>
        
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
