import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsIcon from '@mui/icons-material/Settings'
import BiotechIcon from '@mui/icons-material/Biotech'
import FlagIcon from '@mui/icons-material/Flag'

const drawerWidth = 240

export const Sidebar = () => {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem key='Tests'>
            <ListItemIcon>
              <BiotechIcon />
            </ListItemIcon>
            <ListItemText primary='Tests' />
          </ListItem>
          <ListItem key='Results'>
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            <ListItemText primary='Results' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key='Settings'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
