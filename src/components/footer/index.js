import React from 'react'
import StyledFooter from './Footer.styled'
import Wrapper from '../wrapper/Wrapper';
import FooterLinks from './FooterLinks';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper className='footer-wrapper'>
        <FooterLinks />
        <div className="footer-bottom">
          <SocialMedia />
          <p className='footer-copyright'>copyright &copy; {new Date().getFullYear()} all rights reserved.</p>
        </div>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer