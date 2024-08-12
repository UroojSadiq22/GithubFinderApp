// import React from 'react'
// import UserStyle from'./users.module.css'
// import Search from './search'
// import Navbar from '../Navbar'

<<<<<<< HEAD
// import { useState , useEffect } from 'react'
=======
import { useState  } from 'react'
>>>>>>> bc811cdb3535a42e86ce359464aeea86eaa29918


//  const Users = () => {
// //     const user = [
// //         {
// //             id: 1,
// //             login: "mojombo",
// //             avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
// //             html_url: "https://github.com/mojombo"
// //         },
// //         {
// //             id: 2,
// //             login: "defunkt",
// //             avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
// //             html_url: "https://github.com/defunkt"
// //         },
// //         {
// //             id: 3,
// //             login: "pjhyett",
// //             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
// //             html_url: "https://github.com/pjhyett"
// //         },
// //         {
// //             id: 4,
// //             login: "wycats",
// //             avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
// //             html_url: "https://github.com/wycats"
// //         },
// //         {
// //             id: 5,
// //             login: "ezmobius",
// //             avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
// //             html_url: "https://github.com/ezmobius"
// //         },
// //         { 
// //             login: "ivey",
// //             id: 6,
// //             avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
// //             html_url: "https://github.com/ivey"
// //         },
// //         {
// //             login: "evanphx",
// //             id: 7,
// //             avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
// //             html_url: "https://github.com/evanphx"
// //         },
// //         {
// //             login: "vanpelt",
// //             id: 17,
// //             avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
// //             html_url: "https://github.com/vanpelt",
// //         },
// //         {
// //             login: "wayneeseguin",
// //             id: 18,
// //             avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
// //             html_url: "https://github.com/wayneeseguin",
// //         },
// //         {
// //             login: "brynary",
// //             id: 19,
// //             avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
// //             html_url: "https://github.com/brynary",
// //         },
// //         {
// //             login: "kevinclark",
// //             id: 20,
// //             avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
// //             html_url: "https://github.com/kevinclark",
// //         }   
// //     ]

// const [users , setUsers] = useState([])
    
// // useEffect(()=> {
// //   fetch(`https://api.github.com/users`)
// //   .then(res => res.json())
// //   .then(json => setUsers(json))
// // })

//     // axios.get('https://api.github.com/users').then((res) =>{
    
//     //    setUsers(res.data)
//     // })
//     const searchhandler = (text) => {
//       if (text.trim() === "") {
//         // Avoid making an API call if the search text is empty
//         setUsers([]);
//         return;
//       }
//         fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         .then(res => res.json())
//         .then(json => setUsers(json.items))
      
//     }
//     const clearhandler =()=>{
//       setUsers([])
//     }


//   return (
//     <>
//     <Navbar/>
//     <Search onsearch={searchhandler} onclear={clearhandler}/>
//     <div className={UserStyle.container}>

//       {/* {users.map((item) => (
//       <div className={UserStyle.user}>
//       <img src={item.avatar_url} alt='Profile'></img>
//       <h3>{item.login}</h3>
//       <a href={item.html_url}>Profile</a>
    
//     </div>))} */}
//     {Array.isArray(users) && users.length > 0 ? (
//     users.map((item) => (
//       <div className={UserStyle.user} key={item.id}>
//         <img src={item.avatar_url} alt='Profile' />
//         <h3>{item.login}</h3>
//         <a href={item.html_url}>Profile</a>
//       </div>
//     ))
//   ) : (
//     <p style={{ color: 'white', textAlign: 'center' }}>No users found</p>
//   )}
//     </div>
// </>
    
    
//   )
// }

// export default Users
import React, { useState } from 'react';
import UserStyle from './users.module.css';
import Search from './search';
import Navbar from '../Navbar';
import Loader from '../../Same/Loader';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../Profile';
import {motion} from 'framer-motion'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchhandler = (text) => {
    if (text.trim() === "") {
      setUsers([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${text}`)
      .then(res => res.json())
      .then(json => {
        setUsers(json.items || []);
        setLoading(false);
      });
  };

  const clearhandler = () => {
    setUsers([]);
    setLoading(false);
  };

  const navigate = useNavigate()

  const goToProfile = (username) => {
    setTimeout(() => {
      navigate(`/profile/${username}`)
    }, 1000);
  }


  return (
    <>
      <Navbar />
      <Search onsearch={searchhandler} onclear={clearhandler} setLoading={setLoading} />
      <div className={UserStyle.container}>
        {loading ? (
          <Loader fullScreen={false} /> // Loader only in the list area
        ) : (
          Array.isArray(users) && users.length > 0 ? (
            users.map((item) => (
              <motion.div initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}  className={UserStyle.user} key={item.id}>
                <img src={item.avatar_url} alt='Profile' />
                <h3>{item.login}</h3>
                <div>
                <a href={item.html_url}>
                <i className="fa-brands fa-github fa-2x"></i>
                </a>
                
                <button onClick={() => goToProfile(item.login)} className={UserStyle.button}>Profile details</button>
                </div>
                
              </motion.div>
            ))
          ) : (
            <p></p>
          )
        )}
      </div>
      
    </>
  );
};

export default Users;
