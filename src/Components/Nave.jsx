import React from 'react';
import './Nave.css';
import menu_icon from '../assets/menu.png';
import logo from '../assets/logo.png';
import search_icon from '../assets/search.png';
import upload_icon from '../assets/upload.png';
import more_icon from '../assets/more.png';
import notification from '../assets/notification.png';
import profile_icon from '../assets/user_profile.jpg';

const Nave = ({ toggleSidebar }) => {
  return (
    <nav className='navbar flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src={menu_icon} alt='Menu' onClick={toggleSidebar} />
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search'/>
          <button className='search-button'>
            <img src={search_icon} alt='Search'/>
          </button>
        </div>
      </div>
      <div className='nav-right flex-div'>
        <img src={upload_icon} alt='Upload'/>
        <img src={more_icon} alt='More'/>
        <img src={notification} alt='Notification'/>
        <img src={profile_icon} className='user-icon' alt='User'/>
      </div>
    </nav>
  );
}

export default Nave;
