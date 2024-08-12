import React , {useState} from 'react'

import Homestyle from './home.module.css'
import coverImage from '../../Assests/coveriamge1.jpg'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import {motion} from 'framer-motion'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goToUsers = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/users');
    }, 1000); // Adjust the timeout as needed
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: 'spring', duration: 10, bounce: 0 },
          opacity: { duration: 1 },
        },
    }
  };

  return (
    <>
      {loading && <Loader fullScreen={true} />} {/* Full-screen loader */}
      <div className={Homestyle.bg}></div>
      <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className={Homestyle.lineContainer}
        >
          <motion.path
            d="M -92 -5 L -65 100 L -500 215 Z"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
        </motion.svg>
      <div className={Homestyle.container}>
        <div className={Homestyle.textcontainer}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [400, 0] }}
          transition={{ repeat: 0, duration: 3}}
        >
          <h1>Welcome to The Github Finder App</h1>
        </motion.div>
          
          <button onClick={goToUsers} className={Homestyle.btn}>Find Users</button>
        </div>
        <div className={Homestyle.imgcontainer}>
          <img src={coverImage} alt='Github' />
        </div>
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
          className={Homestyle.lineContainer}
        >
          <motion.path
            d="M 1700 -500 C -600 -100 -100 1200 1500 800"
            variants={draw}
            custom={2}
          />
        </motion.svg>
        
      </div>
    </>
  );
};

export default Home