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
  const navigate  = useNavigate();
  const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  const handleMenuItemClick = (selectedItem) => {
    setText(selectedItem);
    setShowDropdown(false);
    navigate('/');
  }

  const handleNavigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Typography variant="h5" color='error' sx={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={handleNavigateToHome}>
        <Stack direction="row" spacing={1} alignItems="center">
          <YouTubeIcon color="error" fontSize="large" style={{padding: '10px'}}/>
          Youtube
        </Stack>
      </Typography>

      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', position: 'relative', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={() => setShowDropdown(!showDropdown)}>
          <MenuIcon />
        </IconButton>
        {showDropdown && (
          <div style={{ position: 'absolute', top: '100%', left: 10, zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.76)', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', borderRadius: 10, border: '2px solid darkgray', padding: '5px 0', display: 'flex', flexDirection: 'column' }}>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', borderTopLeftRadius: 10, borderTopRightRadius: 10, cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('교육'); setShowDropdown(false); }}>교육</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('문화'); setShowDropdown(false); }}>문화</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('음악'); setShowDropdown(false); }}>음악</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('강연'); setShowDropdown(false); }}>강연</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('인물'); setShowDropdown(false); }}>인물</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('게임'); setShowDropdown(false); }}>게임</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('먹방'); setShowDropdown(false); }}>먹방</div>
            <div style={{ borderBottom: '1px solid lightgray', margin: '0 10px', padding: '8px 16px', cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('아동'); setShowDropdown(false); }}>아동</div>
            <div style={{ margin: '0 10px', padding: '8px 16px', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, cursor: 'pointer', color: 'lightcoral', transition: 'color 0.3s' }} onClick={() => { handleMenuItemClick('개그'); setShowDropdown(false); }}>개그</div>
          </div>
        )}
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28 }} />
      </Paper>
    </Stack>
  )
}
