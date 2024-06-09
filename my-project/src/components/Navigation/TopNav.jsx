import React, { useState, useEffect } from 'react';
import './TopNav.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import logo from '../../assets/Jio.png';

function TopNav() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", () => {
                window.scrollY > 500 ? setSticky(true) : setSticky(false);
            });
        };
    }, []);

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

    const handleSmoothScroll = (event, target) => {
        event.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <nav className={`topnav ${sticky ? "dark-nav" : ""}`}>
                <img src={logo} alt="" className="logo" />
                <ul>
                    <li>
                        <a href="#" onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleSmoothScroll(e, 'campus')}>Postings</a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;
