// == Import
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { wsConnect } from 'src/actions';
import Messages from 'src/components/Messages';
import InputMessage from 'src/components/InputMessage';
import StatusBar from 'src/components/StatusBar';
import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wsConnect());
  }, []);
  return (
    <div className="app">
      <StatusBar />
      <Messages />
      <InputMessage />
    </div>
  );
};

// == Export
export default App;
