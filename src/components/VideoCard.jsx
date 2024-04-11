import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoCard from "../componenets/VideoCard";

import {format, register } from 

export default function VideoCard() {
  if (typeof(video.id) !=== 'string' && video.id.kind === 'youtuve#channel')
  return;
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate(); //앵커테그를 쓰기위해 navigate사용
  const videoId = typeof(video.id) === 'string' ? video.id : video.id.videoId;
              ideo.id.videoId;
  return (
    <li onClick={() => {
      navigate(`/videos/watch/${video.id} `, {state: {video}, })
    }}
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </li>
  )
}