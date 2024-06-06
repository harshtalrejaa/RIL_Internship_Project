import React from 'react';
import './TopNav.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import logo from '../../assets/Jio.png';

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
            <nav className='topnav'>
            <img src={logo} alt="" className="logo" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    {isSignedIn && userId === 'user_2hDpsa04NmsUdqC86ukoY9y5FZy' && (
                        <li>
                            <NavLink
                                to="#"
                                onClick={handleClick}>
                                Create Form
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Postings</a>
                    </li>
                    <li>
                        <a
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;
