import React, { useEffect } from 'react'

const Profile = ({getuser}) => {
  useEffect(() => {
    getuser()

  })


  return (
    <>
     <div>my profile</div> 
    </>
  )
}

export default Profile
