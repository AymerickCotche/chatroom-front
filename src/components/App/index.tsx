// == Import
import * as React from 'react';
import Messages from 'src/components/Messages';
import InputMessage from 'src/components/InputMessage';
import Settings from 'src/components/Settings';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <InputMessage />
    <Settings />
  </div>
);

// == Export
export default App;
