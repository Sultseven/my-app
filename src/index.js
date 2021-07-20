import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


	let dialogs = [
    	{id: 1, name: 'Dimich k'},
    	{id: 2, name: 'Nikita k'},
    	{id: 3, name: 'Lena k'},
    	{id: 4, name: 'Liza k'},
    	{id: 5, name: 'Katya k'},
    	{id: 6, name: 'Dimich k'}
  	]; 

  	let messages = [
    	{message: 'Привет'},
    	{message: 'kak dela?'}
  	];

    let posts = [
      {id: 1, message: 'Welcome! Hi, how are you?', like: 1,  dislike: 0},
      {id: 2, message: 'Welcome! It is my first post!', like:13, dislike: 7},
      {id: 3, message: 'Welcome!!', like:3, dislike: 7}
    ];


ReactDOM.render(
  <React.StrictMode>
    <App posts={ posts } messages={ messages } dialogs={ dialogs } />
  </React.StrictMode>,document.getElementById('root')
  );