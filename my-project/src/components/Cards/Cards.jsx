import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

function Cards() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const handleClick = () => {
    if (isSignedIn) {
      navigate('/formBuilder');
    } else {
      alert('Please log in');
    }
  };

  return (
    <>
      <div className="container">
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.pexels.com/photos/1181568/pexels-photo-1181568.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Error"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship A</h1>
            <p className="mt-3 text-sm text-gray-600">
              3 months <br />
              Mumbai <br />
              Work from Home <br />
              Starts immediately <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.pexels.com/photos/6476186/pexels-photo-6476186.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship B</h1>
            <p className="mt-3 text-sm text-gray-600">
              6 months <br />
              Navi Mumbai <br />
              Work from Home <br />
              Starts immediately <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGvsKI9do6CvYNIdztB1dLuUUGGgy-eLtaw&s"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship C</h1>
            <p className="mt-3 text-sm text-gray-600">
              2 months <br />
              Hyderabad <br />
              Work from Home <br />
              Starts immediately <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4Lo8XU5YSQ2jzo5eKd8ajjWQ17eilCHKgA&s"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship D</h1>
            <p className="mt-3 text-sm text-gray-600">
              2 months <br />
              Delhi <br />
              Work from Home <br />
              Starts immediately <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://images.pexels.com/photos/3747455/pexels-photo-3747455.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship E</h1>
            <p className="mt-3 text-sm text-gray-600">
              4 months <br />
              Mumbai <br />
              In office <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
        <div className="w-[300px] rounded-md border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-rSo6KDmN6hZp4o3Isvrn9it8RQODvy9cw&s"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-black">Internship F</h1>
            <p className="mt-3 text-sm text-gray-600">
              3 months <br />
              Pune <br />
              In office <br />
            </p>
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
