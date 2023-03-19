import React, { useState } from 'react'
import { SubmitButton } from '../button/StyledButton'
import Wrapper from '../wrapper/Wrapper'
import StyledLogin from './Login.styled'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logIn } from '../../reducers/UserSlice'
import Logo from '../company-logo/Logo'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email === userDetails.email && password === userDetails.password) {
      dispatch(logIn())
      navigate('/', {replace: true});
      setEmail('');
      setPassword('');
    }
  }

const handleEmail = (e) => {
  setEmail(e.target.value.trim());
}

const handlePassword = (e) => {
  setPassword(e.target.value.trim());
}

const handleInputBlur = (e, userData, setInputState) => {
  const placeholder = e.target.nextElementSibling;
  const bgSpan = placeholder.nextElementSibling;
  const errorAlert = bgSpan.nextElementSibling;

  if(userData === e.target.value) {
    bgSpan.classList.add("active");
    placeholder.classList.add("active");
    errorAlert.classList.remove("active");        
  } else {
    bgSpan.classList.remove("active");
    placeholder.classList.remove("active");
    errorAlert.classList.add("active");
    
    if(e.target.value.trim().length < 1) {
      errorAlert.innerText = `* ${e.target.name} is required *`;
    } else if(userData !== e.target.value) {
      errorAlert.innerText = `* incorrect ${e.target.name} *`;
    }
    setInputState('');
  }
}

  return (
    <StyledLogin>
      <Wrapper className='login-wrapper'>
        <Logo loginWhite='#fff' loginBlue='#3577F1' />
        <div className="form-container">
          <h4 className='section-title'>login</h4>
          <form className='form-login' onSubmit={handleLogin}>
            <div className="input-group">
              <input type="text" name="email" autoComplete="off" onBlur={(e) => handleInputBlur(e, userDetails.email, setEmail)} onChange={handleEmail} value={email} />
              <span className='placeholder'>email</span>            
              <span className='bg-span'>bg span</span>
              <span className='error-alert'>**email is required**</span>            
            </div>
            <div className="input-group">
              <input type="password" name="password" autoComplete="off" onBlur={(e) => handleInputBlur(e, userDetails.password, setPassword)} onChange={handlePassword} value={password} />
              <span className='placeholder'>password</span>                       
              <span className='bg-span'>bg span</span>
              <span className='error-alert'>**password is required**</span>
            </div>
            <div className="input-control">
              <SubmitButton>login</SubmitButton>
            </div>
          </form>
        </div>
      </Wrapper>
    </StyledLogin>
  )
}

export default Login