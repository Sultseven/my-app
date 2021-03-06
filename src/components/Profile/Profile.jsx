import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

import s from './Profile.module.css'



const Profile = (props) => {

  return (
        <div>
          <ProfileInfo/>
          <MyPosts posts={ props.posts }/>
        </div>
  );
}


export default Profile;