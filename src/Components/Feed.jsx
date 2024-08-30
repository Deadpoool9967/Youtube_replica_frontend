import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
import sampleThumbnail from '../assets/thumbnail4.png'; // Add a sample thumbnail image

const videoData = [
  { id: 1, title: 'Sample Video 1', channel: 'Channel 1', views: '1M views', timestamp: '1 day ago', thumbnail: sampleThumbnail },
  { id: 2, title: 'Sample Video 2', channel: 'Channel 2', views: '500K views', timestamp: '2 days ago', thumbnail: sampleThumbnail },
  { id: 3, title: 'Sample Video 3', channel: 'Channel 3', views: '2M views', timestamp: '3 days ago', thumbnail: sampleThumbnail },
  // Add more sample data as needed
];

const Feed = () => {
  return (
    <div className='feed'>
      {videoData.map(video => (
        <Link to={`/video/${video.id}`} key={video.id} className='video-item'>
          <img src={video.thumbnail} alt={video.title} className='video-thumbnail' />
          <div className='video-details'>
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
            <p>{video.views} • {video.timestamp}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
