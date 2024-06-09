import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkdin.png'
import youtube from '../../assets/youtube.png'

function Footer() {
    return (
        <div>
            <footer className='fcontainer'>
                <div class="footer">
                    <div class="footer-first">
                        <h1><strong>Connect with us <br/> </strong>
                        <ul>
                            <li> <a href="https://www.facebook.com/Jio"><img src={facebook} alt="Facebook" /></a></li>
                            <li> <a href="https://www.instagram.com/reliancejio/?hl=en"><img src={instagram} alt="Instagram" /> </a></li>
                            <li> <a href="https://www.linkedin.com/company/jioplatforms/"><img src={linkedin} alt="Linkedin" /></a> </li>
                            <li> <a href="https://www.youtube.com/channel/UC7x7gqeQQ5dazPAvDgC7TIw"><img src={youtube} alt="Youtube" /></a> </li>
                        </ul>

                        </h1>
                    </div>
                    <div class="footer-text">
                        <ul>
                            <li><strong>Support</strong></li>
                            <li>My account</li>
                            <li>Feedback</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                            <li><strong>Our Company</strong></li>
                            <li>Reliance Industries</li>
                            <li>Reliance Foundations</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                            <li><strong>Useful Links</strong></li>
                            <li>Jio AutoPay</li>
                            <li>Sitemap</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-rights">
                    Copyright &#169; 2024 Reliance Jio Infocomm Ltd. | All rights reserved
                </div>
            </footer>
        </div>
    )
}

export default Footer