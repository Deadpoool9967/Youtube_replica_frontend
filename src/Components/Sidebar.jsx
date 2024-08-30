import React from 'react';
import './Sidebar.css';
import home_icon from '../assets/home.png';
import trending_icon from '../assets/explore.png';
import subscriptions_icon from '../assets/subscriprion.png';
import library_icon from '../assets/library.png';
import history_icon from '../assets/history.png';
import your_videos_icon from '../assets/your.png';
import watch_later_icon from '../assets/watchlater.png';
import liked_videos_icon from '../assets/like.png';
import news from '../assets/news.png';
import sport from '../assets/sports.png';
import music from '../assets/music.png';
import tech from '../assets/tech.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <img src={home_icon} alt='Home' />
        <span>Home</span>
      </div>
      <div className='sidebar-item'>
        <img src={trending_icon} alt='Trending' />
        <span>Trending</span>
      </div>
      <div className='sidebar-item'>
        <img src={subscriptions_icon} alt='Subscriptions' />
        <span>Subscriptions</span>
      </div>
      <div className='sidebar-item'>
        <img src={news} alt='News' />
        <span>News</span>
      </div>
      <div className='sidebar-item'>
        <img src={sport} alt='Sports' />
        <span>Sports</span>
      </div>
      <div className='sidebar-item'>
        <img src={music} alt='Music' />
        <span>Music</span>
      </div>
      <div className='sidebar-item'>
        <img src={tech} alt='Tech' />
        <span>Tech</span>
      </div>
      <div className='sidebar-item'>
        <img src={library_icon} alt='Library' />
        <span>Library</span>
      </div>
      <div className='sidebar-item'>
        <img src={history_icon} alt='History' />
        <span>History</span>
      </div>
      <div className='sidebar-item'>
        <img src={your_videos_icon} alt='Your Videos' />
        <span>Your Videos</span>
      </div>
      <div className='sidebar-item'>
        <img src={watch_later_icon} alt='Watch Later' />
        <span>Watch Later</span>
      </div>
      <div className='sidebar-item'>
        <img src={liked_videos_icon} alt='Liked Videos' />
        <span>Liked Videos</span>
      </div>
    </div>
  );
}

export default Sidebar;
