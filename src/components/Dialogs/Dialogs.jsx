import React from 'react';
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import {NavLink} from 'react-router-dom';


const Dialogs = (props) => {
 let dialogsElements = props.dialogs.map(d => <DialogItem dialogs={ props.dialogs } name={d.name} id={d.id} /> );
 let messagesElements = props.messages.map( m => <MessageItem messages={ props.messages } message={m.message}/> );

  return (
    <div className={s.dialogs}>
    	<div className={s.dialogsItems}>{ dialogsElements }</div>
    	<div className={s.messages}>{ messagesElements }</div>
    </div>
  );
}


export default Dialogs;
