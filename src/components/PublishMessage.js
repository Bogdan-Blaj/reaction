import React, { useState, useContext } from 'react';
import Context from '../context';
import { newMessage } from '../state/actions';
import { useAppContext } from './hooks';

function PublishMessage() {
    const {state: {username} ,pubsub: {publish}} = useAppContext();
    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value)
    }

    const publishMessage = () => {
        publish(newMessage({text, username}));
    }

    const keyUp = event => {
        if(event.key === 'Enter') {
            console.log("event");
            publishMessage();
        }
    }

  return (
    <div>
        <h3>Got something to say?</h3>
        <input value = {text} onChange={updateText} onKeyUp={keyUp}/>
        {' '}
        <button onClick={publishMessage}>Publish It</button>
    </div>
  )
}
export default PublishMessage;
