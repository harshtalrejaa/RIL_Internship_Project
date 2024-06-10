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
                            <li><a href="">My account</a></li>
                            <li><a href="https://www.jio.com/en-in/survey/feedback.html">Feedback</a></li>
                            <li><a href="https://www.jio.com/help/contact-us#/">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                            <li><strong>Our Company</strong></li>
                            <li><a href="https://www.ril.com/">Reliance Industries</a></li>
                            <li><a href="https://reliancefoundation.org/">Reliance Foundations</a></li>
                            <li><a href="https://careers.jio.com/?_ga=2.178446564.1907743366.1718033486-230595145.1718033486">Careers</a></li>
                        </ul>
                    </div>
                    <div class="footer-text">
                        <ul>
                            <li><strong>Useful Links</strong></li>
                            <li><a href="https://www.jio.com/selfcare/autopay/">Jio AutoPay</a></li>
                            <li><a href="https://www.jio.com/jcms/sitemap/">Sitemap</a></li>
                            <li><a href="https://www.jio.com/jcms/jiostories/">JioLife</a></li>
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