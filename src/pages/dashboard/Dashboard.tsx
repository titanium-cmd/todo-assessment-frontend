import React from 'react';
import { Outlet } from 'react-router';
import CustomDrawer from './CustomDrawer';

const Dashboard: React.FC = () => {
  return (
    <CustomDrawer body={<Outlet />} />
  )
}

export default Dashboard
