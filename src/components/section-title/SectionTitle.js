import React from 'react'

const SectionTitle = ({Icon, heading, subtitle}) => {
  return (
    <div>
      <div className="section-subtitle-box">
        <div className='section-subtitle-icon'>
          <Icon />
        </div>
        <div className='section-subtitle'>
          <span>{subtitle}</span>
        </div>
      </div>
      <h2 className='section-title'>{heading}</h2>
    </div>
  )
}

export default SectionTitle