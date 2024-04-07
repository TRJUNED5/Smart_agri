import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import './home.css'; // Import your CSS file
import farmImage from '../components/image/farm_image.avif'; // Import the image

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='main-container'>
      <div className='image-container'>
        <img src={farmImage} alt='Farm' className='farm-image' />
      </div>
      <div className='home-container'>
        {user ? <h2>Welcome {user.email}</h2> : <h2>Welcome, Guest!</h2>}
      </div>
    </div>
  );
};

export default Home;
