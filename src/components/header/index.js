import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartIcon, LogOutIcon } from '../../assets/icons';
import Wrapper from '../wrapper/Wrapper';
import StyledHeader from './Header.styled';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../reducers/UserSlice';
import Logo from '../company-logo/Logo';

const Header = (props) => {
  // const pathArr = [['/','Home'], ['/shop', 'Shop'], ['/about', 'About'], ['/contact', 'Contact']];
  const pathArr = [['/','Home'], ['/shop', 'Shop']];

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cartProducts.cart);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
  }

  return (
    <StyledHeader>
      <Wrapper className="header-wrapper">
        <Logo />
        <nav className="header-nav">
          <ul className="header-menu">
            {pathArr.map(([path, title], i) => (
              <li key={i}>
                <Link to={path} className={location.pathname === path ? "active" : ""}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <div className="cart-btn">
            <Link to="/cart" title="Cart">
              <CartIcon />
            </Link>
            <span className="cart-count">
              {cartProducts && cartProducts.length > 0
                ? cartProducts.length
                : 0}
            </span>
          </div>
          <div className="logout-btn">
            <span className='logout' onClick={handleLogOut} title="Logout">
              <LogOutIcon />
            </span>
          </div>
        </div>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header