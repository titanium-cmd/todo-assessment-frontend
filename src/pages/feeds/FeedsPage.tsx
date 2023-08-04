import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { notify } from 'reapop';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getUser } from 'src/store/asyncConfig';
import { clearAuthState } from 'src/store/auth/authSlice';
import { getAllFeeds } from 'src/store/feeds/feedsService';


const FeedsPage: React.FC = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { user, status: authStatus, message } = useAppSelector((state) => state.auth);
  const { feeds, status } = useAppSelector((state) => state.feeds);


  useEffect(() => {
    dispatch(getAllFeeds());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const user = getUser();
    console.log('user');
    
    if (user) {
      if (location.pathname === '/') {
        navigator('/')
      } else {
        navigator(location.pathname);
      }
    } else {
      navigator('/login');
    }
    // eslint-disable-next-line
  }, [location.pathname, user]);

  useEffect(() => {
    if (authStatus === 'rejected') {
      dispatch(notify(message, 'error'))
    } else if (authStatus === 'fulfilled') {
      dispatch(notify(message, 'success'))
      dispatch(clearAuthState());
    }
    // eslint-disable-next-line
  }, [authStatus]);

  return (
    <div>

    </div>
  )
}

export default FeedsPage
