import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  const handleMenuItemClick = (selectedItem) => {
    setText(selectedItem);
    setShowDropdown(false);
  }

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Link style={{textDecoration: 'none'}} to='/'>
        <Stack direction="row" spacing={1}>
          <YouTubeIcon color="error" fontSize="large" />
          <Typography variant="h5" color='error' sx={{ fontWeight: 'bold' }}>Youtube</Typography>
        </Stack>
      </Link>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', position: 'relative', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setShowDropdown(!showDropdown)}>
          <MenuIcon />
        </IconButton>
        {showDropdown && (
          <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1, backgroundColor: '#fff', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)' }}>
            <div onClick={() => handleMenuItemClick('Menu Item 1')}>Menu Item 1</div>
            <div onClick={() => handleMenuItemClick('Menu Item 2')}>Menu Item 2</div>
            <div onClick={() => handleMenuItemClick('Menu Item 3')}>Menu Item 3</div>
          </div>
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28 }} />
      </Paper>
    </Stack>
  )
}
