import React from 'react'
import StyledLoader from './Loader.styled'

const Loader = ({children}) => {
  return (
    <StyledLoader>
      <span>{children}</span>
    </StyledLoader>
  )
}

export default Loader