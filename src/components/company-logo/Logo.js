import React from 'react'
import { Link } from 'react-router-dom'
import StyledLogo from './Logo.styled'

const Logo = (props) => {
  return (
    <StyledLogo {...props} >
      <Link to="/">
        <span>my</span>
        <span>store</span>
      </Link>
    </StyledLogo>
  )
}

export default Logo