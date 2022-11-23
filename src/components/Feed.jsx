import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}>

        <SideBar />

        <Typography className="copyright" variant="body2" sx={{ marginTop: 1.5, color: '#fff' }}>
          Copyright 2022 @Youtube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} >
          <span style={{ color: '#fff' }}>Latest Uploads</span>
        </Typography>

        <Videos/>
      </Box>

    </Stack>
  )
}

export default Feed;