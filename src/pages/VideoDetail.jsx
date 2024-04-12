import React from "react";
import { useLocation } from 'react-router-dom';
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideo from "../components/RelatedVideos"
import Grid from "@mui/material/Grid";

export default function VideoDetail() {
  const { state } = useLocation(); // 보내진 정보를 바탕으로 받아옴.
  const video = state.video;
  if (!video) return null; // video 객체가 존재하지 않는 경우 처리

  const { title, channelId, channelTitle, description } = video.snippet;
  if (!title || !channelId || !channelTitle || !description) return null; // 필수 속성이 존재하지 않는 경우 처리

  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <article>
          <iframe src={`https://www.youtube.com/embed/${video.id}`} title={title} 
            id='player' typeof='text/html' width='100%' height={500} />
        </article>
        <div>
          <h3>{title}</h3>
          <ChannelInfo />
          <pre>{description}</pre>
        </div>
        </Grid>
        <Grid item xs={9} md={3}>
          <RelatedVideo id={channelId} name={channelTitle} />
        </Grid>
    </Grid>
  )
}