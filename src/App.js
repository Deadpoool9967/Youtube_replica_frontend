import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nave from './Components/Nave';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import VideoPlayer from './Components/Vidoeplayer';
import './App.css';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className={`app ${sidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        <Nave toggleSidebar={toggleSidebar} />
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
