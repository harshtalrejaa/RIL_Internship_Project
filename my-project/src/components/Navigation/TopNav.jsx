import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

function TopNav() {
    const navigate = useNavigate();
    const { isSignedIn, userId } = useAuth();

    console.log("isSignedIn:", isSignedIn);
    console.log("userId:", userId);

    const handleClick = () => {
        if (isSignedIn && userId === 'user_2hDpsa04NmsUdqC86ukoY9y5FZy') {
            navigate('/AdminForm');
        } else if (isSignedIn) {
            alert('You do not have permission to access this page');
        } else {
            alert('Please log in');
        }
    };

    return (
        <div>
            <div className="topnav">
                <div className="relative w-full bg-blue">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center space-x-2 mt-5">
                            <span className="font-bold">Reliance JIO</span>
                        </div>
                        <div className="hidden grow items-start lg:flex">
                            <ul className="ml-12 inline-flex space-x-8 mt-5">
                                <li>
                                    <a
                                        href="#"
                                        className="font-bold text-white hover:text-gray-500"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <NavLink
                                        to="#" // Change this back to "#"
                                        onClick={handleClick}
                                        className="font-bold text-white hover:text-gray-500"
                                    >
                                        Create Form
                                    </NavLink>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="font-bold text-white hover:text-gray-500"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block"></div>
                        <div className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 cursor-pointer"
                            >
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
