import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
      component="form" //It will take input of the video from user as a form
      // onSubmit={() => {{}} }
      sx={{
        borderRadius: 20,
        backgroundColor: '#282828',
        paddingLeft: 2,
        boxShadow: 'none',
        margin: { sm: 5 },
        border: '1 solid #303030',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value=""
      // onChange={() => {{}} }
      />

      <IconButton
        type="submit"
        sx={{ p: '10px', color: 'white' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;