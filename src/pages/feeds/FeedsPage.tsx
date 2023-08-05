import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { notify } from 'reapop';
import SingleFeed from 'src/components/SingleFeed';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getToken } from 'src/store/asyncConfig';
import { clearAuthState } from 'src/store/auth/authSlice';
import { getAllFeeds } from 'src/store/feeds/feedsService';


const FeedsPage: React.FC = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const { token, status: authStatus, message } = useAppSelector((state) => state.auth);
  const { feeds, status } = useAppSelector((state) => state.feeds);  

  useEffect(() => {
    dispatch(getAllFeeds());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const token = getToken();
    if (token) {
      if (location.pathname === '/') {
        navigator('/');
      } else {
        navigator(location.pathname);
      }
    } else {
      navigator('/login');
    }
    // eslint-disable-next-line
  }, [location.pathname, token]);

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
    <Paper elevation={3} style={{ height: '100vh', padding: '16px', overflowY: 'scroll' }}>
      {feeds.map(feed => <SingleFeed feed={feed} />)}
    </Paper>
  )
}

export default FeedsPage
