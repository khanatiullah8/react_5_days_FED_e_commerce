import React from 'react'
import SectionTitle from '../section-title/SectionTitle';
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom';

const BannerCard = ({ id, titleIcon, heading, subTitle, buttonText, imgUrl }) => {
  const navigate = useNavigate();

  return (
    <li className='slide'>
      <div className='slide-text'>
        <SectionTitle Icon={titleIcon} heading={heading} subtitle={subTitle} />
        <Button className='banner-btn' onclick={() => navigate('/shop')}>{buttonText}</Button>
      </div>
      <figure className='banner-figure'>
        <img src={imgUrl} alt={heading} />
      </figure>
    </li>
  )
}

export default BannerCard