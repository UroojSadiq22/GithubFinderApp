import React from 'react'
import UserStyle from'./users.module.css'
import Search from './search'

import { useState , useEffect } from 'react'


 const Users = () => {
//     const user = [
//         {
//             id: 1,
//             login: "mojombo",
//             avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//             html_url: "https://github.com/mojombo"
//         },
//         {
//             id: 2,
//             login: "defunkt",
//             avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
//             html_url: "https://github.com/defunkt"
//         },
//         {
//             id: 3,
//             login: "pjhyett",
//             avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
//             html_url: "https://github.com/pjhyett"
//         },
//         {
//             id: 4,
//             login: "wycats",
//             avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
//             html_url: "https://github.com/wycats"
//         },
//         {
//             id: 5,
//             login: "ezmobius",
//             avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
//             html_url: "https://github.com/ezmobius"
//         },
//         { 
//             login: "ivey",
//             id: 6,
//             avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
//             html_url: "https://github.com/ivey"
//         },
//         {
//             login: "evanphx",
//             id: 7,
//             avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
//             html_url: "https://github.com/evanphx"
//         },
//         {
//             login: "vanpelt",
//             id: 17,
//             avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
//             html_url: "https://github.com/vanpelt",
//         },
//         {
//             login: "wayneeseguin",
//             id: 18,
//             avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
//             html_url: "https://github.com/wayneeseguin",
//         },
//         {
//             login: "brynary",
//             id: 19,
//             avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
//             html_url: "https://github.com/brynary",
//         },
//         {
//             login: "kevinclark",
//             id: 20,
//             avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
//             html_url: "https://github.com/kevinclark",
//         }   
//     ]

const [users , setUsers] = useState([])
    
// useEffect(()=> {
//   fetch(`https://api.github.com/users`)
//   .then(res => res.json())
//   .then(json => setUsers(json))
// })

    // axios.get('https://api.github.com/users').then((res) =>{
    
    //    setUsers(res.data)
    // })
    const searchhandler = (text) => {
      
        fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        .then(res => res.json())
        .then(json => setUsers(json.items))
      
    }
    const clearhandler =()=>{
      setUsers([])
    }


  return (
    <>
    <Search onsearch={searchhandler} onclear={clearhandler}/>
    <div className={UserStyle.container}>

      {users.map((item) => (
      <div className={UserStyle.user}>
      <img src={item.avatar_url} alt='Profile'></img>
      <h3>{item.login}</h3>
      <a href={item.html_url}>Profile</a>
    
    </div>))}
    </div>
</>
    
    
  )
}

export default Users
