import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { disconnectUser } from 'src/actions';
import Settings from 'src/components/Settings';
import './styles.scss';

const StatusBar = () => {
  const dispatch = useDispatch();
  const settingsMessage = useAppSelector((state) => state.settingsMessage);
  const connectedUser = useAppSelector((state) => state.connected);
  const handleClickBtn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (connectedUser) {
      console.log('azsasa');
      dispatch(disconnectUser());
    }
  };
  const ejsDisconnectBtn = (
    <button
      type="button"
      onClick={handleClickBtn}
    >
      Se déconnecter
    </button>
  );
  return (
    <div className="status-bar">
      <p className="status-bar__message">
        {settingsMessage}
      </p>
      {connectedUser ? ejsDisconnectBtn : <Settings />}
    </div>
  );
};

export default StatusBar;
