import _ from 'lodash';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/hooks';
import {
  toggleOpenSetting,
  typeEmail,
  typePassword,
  submitSettingsForm,
} from '../../actions';
import './styles.scss';

const Settings = () => {
  const dispatch = useDispatch();
  const settingsOpen = useAppSelector((state) => state.settingsOpen);
  const emailValue = useAppSelector((state) => state.settingsInput.email);
  const passwordValue = useAppSelector((state) => state.settingsInput.password);
  const settingsForm = useRef(null);

  const handleClickToggleOpen = () => {
    dispatch(toggleOpenSetting());
  };

  const handleInputEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(typeEmail(event.currentTarget.value));
  };

  const handleInputPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(typePassword(event.currentTarget.value));
  };

  const handleSubmitBtn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!_.isEmpty(emailValue && passwordValue)) {
      dispatch(submitSettingsForm());
      dispatch(typeEmail(''));
      dispatch(typePassword(''));
      dispatch(toggleOpenSetting());
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !_.isEmpty(emailValue && passwordValue)) {
      dispatch(submitSettingsForm());
      dispatch(typeEmail(''));
      dispatch(typePassword(''));
      dispatch(toggleOpenSetting());
    }
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
          value={emailValue}
          onChange={handleInputEmailChange}
          onKeyPress={handleEnterKey}
        />
        <input
          className="settings-form__password"
          type="password"
          placeholder="Mot de passe"
          value={passwordValue}
          onChange={handleInputPasswordChange}
          onKeyPress={handleEnterKey}
        />
        <button
          className="settings-form__button"
          type="submit"
          onClick={handleSubmitBtn}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Settings;
