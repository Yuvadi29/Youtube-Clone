import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#000000" }}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}></Route>
                <Route path="/video/:id" element={<VideoInfo/>}></Route>
                <Route path="/channel/:id" element={<ChannelInfo/>}></Route>
                <Route path="/search/:searchTerm" element={<Search/>}></Route>
            </Routes>
        </Box>
    </BrowserRouter>
}

export default App