import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilities/constant';


const SideBar = ({selectedCategory, setSelectedCategory}) => (
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
            onClick={() => setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#282828', 
                color: 'white',
            }}
            key={category.name}
        >
            <span style={{ color: category.name === selectedCategory ? 'white' : 'white', marginRight: '15px'}}>{category.icon}</span>
            <span>{category.name}</span>
        </button>
    ))}

  </Stack>
)

export default SideBar;