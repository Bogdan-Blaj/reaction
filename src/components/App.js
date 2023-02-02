import React, {useEffect, useReducer} from 'react';
import Context from '../context';
import context from '../context';
import reducer, { initialState } from '../state/reducer';
import MessageBoard from './MessageBoard';
import PublishMessage from './PublishMessage';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log('state', state);

  return (
    <Context.Provider value ={{state, dispatch}}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
