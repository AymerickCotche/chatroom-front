// == Import
import _ from 'lodash';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { sendMessage, typeText, wsSendToServer } from 'src/actions';
import './styles.scss';

// == Composant
const InputMessage = () => {
  const textValue = useAppSelector((state) => state.text);
  const connectedUser = useAppSelector((state) => state.connected);
  const dispatch = useDispatch();

  const input = useRef(null);

  useEffect(() => {
    if (!_.isNil(input.current)) {
      input.current.focus();
    }
  }, [connectedUser]);
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(typeText(event.currentTarget.value));
  };

  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !_.isEmpty(textValue) && connectedUser) {
      event.preventDefault();
      dispatch(wsSendToServer());
      dispatch(typeText(''));
    }
  };
  const handleClickBtn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!_.isEmpty(textValue) && connectedUser) {
      dispatch(wsSendToServer());
      dispatch(typeText(''));
    }
  };
  return (
    <form className="inputMessage">
      <input
        ref={input}
        className="inputMessage__input"
        type="text"
        placeholder="Saisissez votre message..."
        onChange={handleInputChange}
        onKeyPress={handleEnterKey}
        value={textValue}
        disabled={!connectedUser}
      />
      <button
        className="inputMessage__btn"
        type="submit"
        onClick={handleClickBtn}
        disabled={!connectedUser}
      >
        &gt;
      </button>
    </form>
  );
};

// == Export
export default InputMessage;
