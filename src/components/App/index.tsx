// == Import
import * as React from 'react';
import Messages from 'src/components/Messages';
import InputMessage from 'src/components/InputMessage';
import StatusBar from 'src/components/StatusBar';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <StatusBar />
    <Messages />
    <InputMessage />
  </div>
);

// == Export
export default App;
