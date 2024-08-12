import React, {useState} from 'react'
import Navstyle from './navbar.module.css'
import {Link, useNavigate } from 'react-router-dom'
import Loader from '../../Same/Loader'

const Navbar = ({showBackButton}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/');
    }, 1000); // Adjust the timeout as needed
  };
  const goToUser = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/users');
    }, 1000); // Adjust the timeout as needed
  };
  return (
    <>
    {loading && <Loader fullScreen={true} />}
    <div className={Navstyle.container}>
    <div className={Navstyle.title}>
        <p><i className="fa-brands fa-github fa-2x"></i></p>
    <h1>Github Finder</h1>
  </div>
  
  <div className={Navstyle.btns}>
    
    {/* <ul className={Navstyle.navitems}>
        <li>
            <Link to='/' className={Navstyle.link}>Home</Link>
        </li>
    </ul> */}
    <button onClick={goToHome} className={Navstyle.btn}>Home</button>
    {showBackButton && <button onClick={goToUser} className={Navstyle.btn}>Back</button>}
  </div>
    </div>
    
  </>
    
  )
}

export default Navbar
