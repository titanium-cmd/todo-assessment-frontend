import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import { BottomNavigationAction, BottomNavigation as MuiBottomNavigation } from '@mui/material';
import React from 'react';

const CustomBottomNavigation: React.FC = () => {
  return (
    <MuiBottomNavigation
      showLabels
      style={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />

    </MuiBottomNavigation>
  );
}

export default CustomBottomNavigation;
