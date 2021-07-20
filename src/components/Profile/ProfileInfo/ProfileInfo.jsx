import React from 'react';
import s from './Profile.module.css'



const ProfileInfo = () => {
  return (
        <div>
          <div>Main content</div>
          <div>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/578929ec37c5819281d007bb/1468609906549-X2HJKE1PVK3SKZWHMKRV/ke17ZwdGBToddI8pDm48kCoeziwf20MZUkNXjkw-np57gQa3H78H3Y0txjaiv_0fLkOtoHUu4B9R8Nt6NbetHZoDpaD9uBLhMccYu6BUmR6zVQdUwtGk8d_625Yyd3qArCLSIWAQvdC7iWmC9HNtRSXS6XmVv7bUJ418E8Yoc1j9Ri2nTbE-ARr45CM_mNDqLoc173JGqcpncITdXKLboA/wall-background_optimized.jpg" 
              width="990" 
              height="300"
              />
          </div>

          <div className={s.descriptionBlock}>
            Аватар+description
          </div>
        </div>
  );
}


export default ProfileInfo;