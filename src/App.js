import React from 'react';

//Routing Essentials
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

// Importing the components
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoInfo from './components/VideoInfo';
import ChannelDetail from './components/ChannelDetail';
import Search from './components/Search';

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />}></Route>
                <Route path="/video/:id" element={<VideoInfo />}></Route>
                <Route path="/channel/:id" element={<ChannelDetail />}></Route>
                <Route path="/search/:searchTerm" element={<Search />}></Route>
            </Routes>
        </Box>
    </BrowserRouter>
);

export default App;