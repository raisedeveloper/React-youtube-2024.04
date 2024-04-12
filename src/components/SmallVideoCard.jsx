import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// formatAgo 함수를 사용하는 패키지로부터 import
import { formatAgo } from "../util/date";
import { styled } from '@mui/material/styles';

export default function SmallVideoCard({ video }) {
  const navigate = useNavigate();
  const videoId = video.id.videoId;
  const { title, thumbnails, publishedAt } = video.snippet;
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <Card onClick={() => { navigate(`/videos/watch/${videoId}`, { state: { video } }) }} >
      <Stack direction={'row'} spacing={1}>
        <img src={thumbnails.default.url} alt={title} />
        <div style={{textAlign: 'left'}}>
          <Typography>{title}</Typography>
          <Typography>{formatAgo(publishedAt, 'ko')}</Typography>
          <Div>{"button"}</Div>;
        </div>
      </Stack>
    </Card>
  );
}