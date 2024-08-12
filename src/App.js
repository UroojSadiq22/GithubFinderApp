
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Feature/Navbar';
import Users from './Components/Feature/Users';
import Home from './Components/Same/Home';
import Profile from './Components/Feature/Profile';
import { useState } from 'react';



function App() {
//   const [user , setUser] = useState('')
//    const getUser = (username) => {
      
//     fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//     .then(res => res.json())
//     .then(json => setUser(json))
  
// }



  return (

    <>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/users' element ={<Users/>}></Route>
      <Route path='/profile/:username' element={<Profile/>}></Route>
      {/* <Route path='/users/:login' element={props => (<Profile {...props} getuser = {getUser} users={user}/>)}></Route> */}
    </Routes>
    
    </>
  );
}

export default App;
