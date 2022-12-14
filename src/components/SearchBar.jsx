import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form" //It will take input of the video from user as a form
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          color: '#fff',
        }}
      />

      <IconButton
        type="submit"
        sx={{ p: '10px', color: 'white' }}
        aria-label="search"
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;