import React from 'react';
import { useParams } from 'react-router-dom';
import './Vidoeplayer.css';
import likeIcon from '../assets/like.png';
import dislikeIcon from '../assets/dislike.png';
import shareIcon from '../assets/share.png';
import saveIcon from '../assets/save.png';
import commentLikeIcon from '../assets/like.png';
import commentDislikeIcon from '../assets/dislike.png';
import sampleThumbnail from '../assets/thumbnail4.png';

const VideoPlayer = () => {
  const { id } = useParams(); // Get the video ID from the URL params

  const similarVideos = [
   
      { id: 1, title: 'Sample Video 1', channel: 'Channel 1', views: '1M views', timestamp: '1 day ago', thumbnail: sampleThumbnail },
      { id: 2, title: 'Sample Video 2', channel: 'Channel 2', views: '500K views', timestamp: '2 days ago', thumbnail: sampleThumbnail },
      { id: 3, title: 'Sample Video 3', channel: 'Channel 3', views: '2M views', timestamp: '3 days ago', thumbnail: sampleThumbnail },
      // Add more sample data as needed
   
  ];

  return (
    <div className='video-player-page'>
      <div className='video-player'>
        <div className='video-container'>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Zb1zVeXLUf8?start=3617"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
        <div className='video-details'>
          <h1>Video Title</h1>
          <p>1M views • Uploaded 1 day ago</p>
          <div className='video-actions'>
            <div className='action-item'>
              <img src={likeIcon} alt="Like" />
              <span>Like</span>
            </div>
            <div className='action-item'>
              <img src={dislikeIcon} alt="Dislike" />
              <span>Dislike</span>
            </div>
            <div className='action-item'>
              <img src={shareIcon} alt="Share" />
              <span>Share</span>
            </div>
            <div className='action-item'>
              <img src={saveIcon} alt="Save" />
              <span>Save</span>
            </div>
          </div>
          <p>Description of the video goes here.</p>
        </div>
        <div className='comments-section'>
          <h2>Comments</h2>
          <div className='comment-box'>
            <input type='text' placeholder='Add a comment...' />
            <button>Comment</button>
          </div>
          <div className='comment-list'>
            {/* Here you can map through comments */}
            <div className='comment'>
              <p><strong>User1:</strong> Great video!</p>
              <div className='comment-actions'>
                <img src={commentLikeIcon} alt="Like" />
                <img src={commentDislikeIcon} alt="Dislike" />
              </div>
            </div>
            <div className='comment'>
              <p><strong>User2:</strong> Thanks for sharing!</p>
              <div className='comment-actions'>
                <img src={commentLikeIcon} alt="Like" />
                <img src={commentDislikeIcon} alt="Dislike" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='similar-videos'>
        <h2>Similar Videos</h2>
        {similarVideos.map(video => (
          <div key={video.id} className='similar-video-item'>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
