import React from 'react'
import { NewsletterIcon } from '../../assets/icons';
import StyledNewsletter from './Newsletter.styled';
import Wrapper from '../wrapper/Wrapper';
import SectionTitle from '../section-title/SectionTitle';

const NewsLetter = () => {
  return (
    <StyledNewsletter>
      <Wrapper className='newsletter-wrapper'>
        <SectionTitle Icon={NewsletterIcon} heading='get weekly update' subtitle='newsletter' />
        <form className='newsletter-form' onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="email" placeholder='example@gmail.com' />
          </div>
          <div className="input-control">
            <input type="submit" value='subscribe' />
          </div>
        </form>
      </Wrapper>
    </StyledNewsletter>
  )
}

export default NewsLetter