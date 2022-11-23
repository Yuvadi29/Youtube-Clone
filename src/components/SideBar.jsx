import React from 'react';
import { Stack } from '@mui/material';
import { categories } from './utilities/constant';

const selection = 'New';

const SideBar = () => (
  <Stack 
    direction="row"
    sx = {{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection : { md: "column" },
    }}
  >


    {categories.map((category) => (
        <button
            className="category-btn"
            style={{
                background: category.name === selection && '#282828', 
                color: 'white',
            }}
            key={category.name}
        >
            <span style={{ color: category.name === selection ? 'white' : 'white', marginRight: '15px'}}>{category.icon}</span>
            <span>{category.name}</span>
        </button>
    ))}

  </Stack>
)

export default SideBar;