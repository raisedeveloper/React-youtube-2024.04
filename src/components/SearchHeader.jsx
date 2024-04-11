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

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState(''); /*초기값은 '' 빈스트링으로 설정 */
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Link to='/'>
        <Stack direction="row" spacing={1}>
          <YouTubeIcon color="error" fontSize="large" />
          <Typography variant="h5" color='error' sx={{ fontWeight: 'bold' }}>Youtube</Typography>
        </Stack>
      </Link>
      <Paper
        component="form" onClick={handleSubmit}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        </IconButton>
      </Paper>
    </Stack>
  )
}