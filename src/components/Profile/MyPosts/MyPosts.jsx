import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'



const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} like={p.like} dislike={p.dislike}/>);

  return (
          <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
              <div className={s.AddPostsBlock}>
                <textarea></textarea>
                <div>
                  <button>Add post</button>
                  <button>Remove</button>
                </div>
              </div>
            </div>
            { postsElements }
        </div>
  );
}


export default MyPosts;