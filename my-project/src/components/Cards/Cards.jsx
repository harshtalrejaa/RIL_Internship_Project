import React from 'react';
import PropTypes from 'prop-types';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const Card = ({ title, description, imageSource, id }) => {
  const navigate  = useNavigate()
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
      <div className="jobcards">
    <div className="flex flex-wrap">
      <div className="w-[300px] rounded-md border m-4">
        <img
          src="https://static.realme.net/page/offer/images/Jio-194e345e69.jpg" // Use the imageSource prop here
          alt="Job"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-gray-600">{description}</p>
         
          <button
            type="button"
            onClick={handleClick} // Call handleClick function on button click
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Apply
          </button>
          
        </div>
      </div>
    </div>
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
