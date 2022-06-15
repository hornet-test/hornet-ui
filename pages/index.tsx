import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import { Sidebar } from '../src/components/Sidebar'
import { Header } from '../src/components/Header'
import { Tests } from '../src/components/Tests'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Tests />
        </Box>
      </Box>
    </div>
  )
}

export default Home
