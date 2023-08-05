import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import NotificationsSystem, { dismissNotification, setUpNotifications, wyboTheme } from 'reapop';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from "./pages/dashboard/Dashboard";
import FeedsPage from './pages/feeds/FeedsPage';
import NewFeedPage from './pages/feeds/NewFeedPage';
import { setupAxiosResponseInterceptors } from './store/axios';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notifications = useAppSelector((state) => state.notifications)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1cc10c',
      },
    },
  });

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
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dispatch(dismissNotification(id))}
      theme={wyboTheme}
    />
    <Routes>
      <Route path='/' element={<Dashboard />} >
        <Route path='' index element={<FeedsPage />} />
      </Route>
      <Route path='/new' element={<NewFeedPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </ThemeProvider>
}

export default App
