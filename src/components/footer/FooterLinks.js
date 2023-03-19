import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon, EmailIcon } from '../../assets/icons';


const FooterLinks = () => {
  return (
    <div className="footer-top">
      <div className="footer-support">
        <h4>support</h4>
        <div className='footer-support-info'>
          <p>685 market street, las vegas, LA 95820, united states.</p>
          <div className="footer-email">
            <a href="mailto:mystore@xyz.com"><EmailIcon /> mystore@xyz.com</a>
          </div>
          <div className="footer-phone">
            <a href="tel:+018503155862"><PhoneIcon /> (+01) 850-315-5862</a>
          </div>
        </div>
      </div>
      <div className="footer-account">
        <h4>account</h4>
        <ul>
          <li>
            <Link to="/">My account</Link>
          </li>
          <li>
            <Link to="/">Login / Register</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/">Wishlist</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="footer-quick-link">
        <h4>quick link</h4>
        <ul>
          <li>
            <Link to="/">Privacy policy</Link>
          </li>
          <li>
            <Link to="/">Terms of use</Link>
          </li>
          <li>
            <Link to="/">FAQs</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks