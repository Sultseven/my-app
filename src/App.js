import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';

import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {


  return (
  	<BrowserRouter>
    	<div className="App">
    		<Header/>
    		<Navbar/>
    		<div className="content-app">
    			<Route exact path='/profile' render={ () => <Profile posts={ props.posts } />} />
    			<Route path='/dialogs' render={ () => <Dialogs dialogs={ props.dialogs } messages={ props.messages } />} />
          <Route path='/news' render={ () => <News/>} />
    		</div>
    	</div>
    </BrowserRouter>
  );
}


export default App;