import React, { useEffect, useRef } from 'react'
import { ArrowUpIcon } from '../../assets/icons'
import StyledToTop from './ToTop.styled';

const ToTop = () => {

  const toTopBtn = useRef(null);

  const handleWindowScroll = () => {
    if(window.scrollY > 50) {
      toTopBtn?.current?.classList.add('active');
    } else {
      toTopBtn?.current?.classList.remove('active');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  const handleToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <StyledToTop ref={toTopBtn} className='to-top' onClick={handleToTop}>
      <span className='to-top-btn'><ArrowUpIcon /></span>
    </StyledToTop>
  )
}

export default ToTop;