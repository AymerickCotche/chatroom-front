import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import Settings from 'src/components/Settings';
import './styles.scss';

const StatusBar = () => {
  const settingsMessage = useAppSelector((state) => state.settingsMessage);
  return (
    <div className="status-bar">
      <p className="status-bar__message">
        {settingsMessage}
      </p>
      <Settings />
    </div>
  );
};

export default StatusBar;
