import _ from 'lodash';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import { toggleOpenSetting } from '../../actions';
import './styles.scss';

const Settings = () => {
  const dispatch = useDispatch();
  const settingsOpen = useAppSelector((state) => state.settingsOpen);
  const settingsForm = useRef(null);
  const handleClickToggleOpen = () => {
    dispatch(toggleOpenSetting());
  };

  useEffect(() => {
    if (!_.isNil(settingsForm)) {
      if (settingsOpen) {
        settingsForm.current.classList.remove('settings-form__hidden');
      } else {
        settingsForm.current.classList.add('settings-form__hidden');
      }
    }
  }, [settingsOpen]);
  return (
    <div
      className="settings"
    >
      <button
        className="settings__close"
        type="button"
        onClick={handleClickToggleOpen}
      >
        {settingsOpen ? '✖' : '+'}
      </button>
      <form
        className="settings-form"
        ref={settingsForm}
      >
        <input
          className="settings-form__email"
          type="email"
          placeholder="Email"
        />
        <input
          className="settings-form__password"
          type="password"
          placeholder="Mot de passe"
        />
        <button
          className="settings-form__button"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Settings;
