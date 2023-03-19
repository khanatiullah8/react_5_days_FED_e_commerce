import React from 'react'
import { DeliveryIcon, GuaranteeIcon, ReturnIcon, SupportIcon } from '../../assets/icons';
import StyledKeyFeatures from './KeyFeatures.styled';
import Wrapper from '../wrapper/Wrapper';

const KeyFeatures = () => {
  return (
    <StyledKeyFeatures>
      <Wrapper>
        <ul className="key-features">
          <li>
            <div className="feature-icon">
              <DeliveryIcon />
            </div>
            <div>
              <h5>fast & secure delivery</h5>
              <p>tell about your service.</p>
            </div>
          </li>
          <li>
            <div className="feature-icon">
              <GuaranteeIcon />
            </div>
            <div>
              <h5>money back guarantee</h5>
              <p>within 10 days.</p>
            </div>
          </li>
          <li>
            <div className="feature-icon">
              <ReturnIcon />
            </div>
            <div>
              <h5>24 hour return policy</h5>
              <p>tell about your service.</p>
            </div>
          </li>
          <li>
            <div className="feature-icon">
              <SupportIcon />
            </div>
            <div>
              <h5>pro quality support</h5>
              <p>24/7 live support.</p>
            </div>
          </li>
        </ul>
      </Wrapper>
    </StyledKeyFeatures>
  )
}

export default KeyFeatures