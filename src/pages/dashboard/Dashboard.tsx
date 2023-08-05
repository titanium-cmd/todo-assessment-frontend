import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import CustomBottomNavigation from './CustomBottomNavigation'

const Dashboard: React.FC = () => {
  const isSmallScreen = useMediaQuery((theme) => (theme as any).breakpoints.down('sm'));
  return (
    <Grid container>
      {isSmallScreen ? (
        <>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
          <CustomBottomNavigation />
        </>
      ) : (
        <>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Outlet />
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default Dashboard
