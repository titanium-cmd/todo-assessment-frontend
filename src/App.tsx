import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import NotificationsSystem, { dismissNotification, setUpNotifications, wyboTheme } from 'reapop';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import NotFoundPage from './pages/404/NotFoundPage';
import FeedsPage from './pages/feeds/FeedsPage';
import NewFeedPage from './pages/feeds/NewFeedPage';
import { setupAxiosResponseInterceptors } from './store/axios';
import LoginPage from './pages/auth/LoginPage';
import CssBaseline from "@mui/material/CssBaseline";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notifications = useAppSelector((state) => state.notifications)

  useEffect(() => {
    setupAxiosResponseInterceptors(dispatch, navigate)
    setUpNotifications({
      defaultProps: {
        position: 'top-center',
        dismissible: true,
        dismissAfter: 3600
      }
    })
    // eslint-disable-next-line
  }, []);
  return <>
    <CssBaseline />
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dispatch(dismissNotification(id))}
      theme={wyboTheme}
    />
    <Routes>
      <Route path='/' element={<FeedsPage />} />
      <Route path='/new' element={<NewFeedPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </>
}

export default App
