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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return children;
}

export default UserAuth