import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoVideoTitle, demoChannelTitle } from '../utilities/constant';

const VideoCard = ({ video: { id: {
  videoId }, snippet } }) => {
  // console.log(videoId, snippet);
  return (
    <Card sx={{ width: { sm: '358px', md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: '12px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>

        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color='#FFF'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="light" color='#d3d3d3'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: '12px', color: 'grey', marginLeft: '5px', marginTop: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;