import React, {useEffect} from 'react'
import Wrapper from '../wrapper/Wrapper'
import StyledBanner from './Banner.styled'
import BannerCard from './BannerCard'
import { bannerItems } from './bannerData'

const Banner = () => {

  useEffect(() => {
    const slides = document.querySelectorAll('.banner-slider li');
    
    let num = 0;
    slides[num].classList.add('active')

    const handleSlider = (index) => {
      for(let item of slides) {
        item.classList.remove('active');
      }
      slides[index].classList.add('active')
    }

    handleSlider(num);
    
    const interval = setInterval(() => {
      num += 1;
      if(num > slides.length - 1) num = 0;
      
      handleSlider(num);
    }, 2500);

    return () => {
      clearInterval(interval);
    }
  }, [])
  

  return (
    <StyledBanner>
      <Wrapper>
        <ul className="banner-slider">
          {bannerItems && bannerItems.map((item) => <BannerCard key={item.id} {...item} /> )}
        </ul>
      </Wrapper>
    </StyledBanner>
  );
}

export default Banner