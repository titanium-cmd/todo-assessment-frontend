import { List, ListItem, ListItemText, Paper } from '@mui/material'
import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <Paper elevation={3} style={{ height: '100vh', padding: '16px' }}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Explore" />
        </ListItem>
        {/* Add more menu items */}
      </List>
    </Paper>
  )
}

export default Sidebar
