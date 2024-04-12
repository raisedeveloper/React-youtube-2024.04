import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  // if (typeof(video.id) !== 'string' && video.id.kind === 'youtube#channel')
  //   return;
  const videoId = typeof(video.id) === 'string' ? video.id : video.id.videoId;
  return (
    <Card 
      onClick={() => { navigate(`/videos/watch/${videoId}`, {state: {video} }) }} style={{ height:320, border: 'none' }} variant="outlined"
    >
      <CardContent>
        <img src={thumbnails.medium.url} alt={title} style={{ width: 350, borderRadius: 20 }} />
        <div>
          <Typography sx={{fontSize: 16, fontWeight: 'bold'}}>{title}</Typography>
          <Typography>{channelTitle}</Typography>
          <Typography>{formatAgo(publishedAt, 'ko')}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}