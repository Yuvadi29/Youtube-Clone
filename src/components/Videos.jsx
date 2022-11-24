import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoID && <VideoCard video={item} />}
          {item.id.channelID && <ChannelCard detail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;