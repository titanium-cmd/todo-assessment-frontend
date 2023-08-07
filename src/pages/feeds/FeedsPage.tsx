import { Box, Card, CardContent, CircularProgress, Grid, List, ListItem, Paper, Typography, useMediaQuery } from '@mui/material';
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
  const isLarge = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  console.log('feeds', feeds);

  const dummyCommunities = [
    {
      id: 1,
      name: 'Nature Lovers',
      description: 'A community for nature enthusiasts',
      members: 123,
    },
    {
      id: 2,
      name: 'Tech Enthusiasts',
      description: 'Discuss the latest tech trends and innovations',
      members: 456,
    },
    {
      id: 3,
      name: 'Foodies Club',
      description: 'Explore and share your favorite recipes',
      members: 789,
    },
  ];

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
    <Box
      component="main"
      display={'flex'}
      sx={{ flexGrow: 1, mt: 5, width: '100%', height: '100%' }}
    >
      <Paper elevation={0} style={{ height: '100%', padding: '16px', overflowY: 'scroll', width: isLarge ? '100%' : '70%' }}>
        {status === 'pending' ? <>
          <Grid>
            <CircularProgress size={64} disableShrink thickness={3} />
          </Grid>
        </> : feeds.map(feed => <SingleFeed feed={feed} />)}
      </Paper>
      {!isLarge &&
        <Box
          component="aside"
          sx={{ mt: 2 }}
        >
          <Typography variant='h6' color={'primary'}>Top Communities</Typography>
          <List>
            {dummyCommunities.map((community) => (
              <ListItem key={community.id}>
                <Card sx={{ width: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" color="textSecondary">
                      {community.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {community.description}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {community.members} members
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Box>
      }
    </Box>
  )
}

export default FeedsPage
