import React from 'react'
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, DribbbleIcon, PinterestIcon } from '../../assets/icons';

const SocialMedia = () => {
  return (
    <ul className="footer-social">
      <li>
        <Link to="/" className='facebook-icon'>
          <FacebookIcon />
        </Link>
      </li>
      <li>
        <Link to="/" className='instagram-icon'>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link to="/" className='twitter-icon'>
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link to="/" className='youtube-icon'>
          <YoutubeIcon />
        </Link>
      </li>
      <li>
        <Link to="/" className='dribbble-icon'>
          <DribbbleIcon />
        </Link>
      </li>
      <li>
        <Link to="/" className='pinterest-icon'>
          <PinterestIcon />
        </Link>
      </li>
    </ul>
  );
}

export default SocialMedia