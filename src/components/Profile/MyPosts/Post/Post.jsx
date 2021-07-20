import React from 'react';
import s from './Post.module.css'



const Post = (props) => {
  return (
          <div className={s.Post}>
          	<img src="https://yt3.ggpht.com/a/AATXAJwr02k6NG08y8HG0-513zsesfbyxoBPGeKlZhhjkA=s900-c-k-c0xffffffff-no-rj-mo" width="15"/>
            {props.message}
            <img src="https://im0-tub-ru.yandex.net/i?id=aa441d9785530686fe2a5b4dae8df334&n=13" width="15"/>
            {props.like}
            <img src="http://cdn.onlinewebfonts.com/svg/img_521099.png" width="10" />
            {props.dislike}
          </div>
  );
}


export default Post;