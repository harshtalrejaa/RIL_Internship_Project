import React from 'react';
import './TopNav.css';
import { Link, NavLink } from 'react-router-dom';
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
                        <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link>
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
                        <Link to="about" smooth={true} offset={-150} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="campus" smooth={true} offset={-260} duration={500}>Postings</Link>
                    </li>
                    <li>
                        <Link to="contact"
                            smooth={true}
                            offset={0}
                            duration={500} >Contact</Link>


                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;
