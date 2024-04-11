import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  if (typeof (video.id) !== 'string' && video.id.kind === 'youtube#channel')
    return;
  const videoId = typeof (video.id) === 'string' ? video.id : video.id.videoID;
  return (
    <div onClick={() => {
      navigate(`/videos/watch/${videoId}`)
    }}>
      <img src={thumbnails.medium.url} alt={title} width={250}/>
      <div>
        <p style={{padding: '0px 40px 0px 0px'}}>{title}</p>
        <p style={{padding: '0px 40px 0px 0px'}}>{channelTitle}</p>
        <p style={{padding: '0px 40px 0px 0px'}}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </div>
  )
}