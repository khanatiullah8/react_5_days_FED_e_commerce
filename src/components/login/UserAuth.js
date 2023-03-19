import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const UserAuth = ({children}) => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userDetails);
  
  useEffect(() => {
    if(!userDetails.isLoggedIn) {
      return navigate('/login');
    }
  }, [])


  return children;
}

export default UserAuth