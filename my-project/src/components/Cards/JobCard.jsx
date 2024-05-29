import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({ title, description, imageSource, id }) => {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={imageSource}
        alt="Job"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <Link to={`/${id}/${title}`}>
          <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default JobCard;
