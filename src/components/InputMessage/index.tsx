// == Import
import _ from 'lodash';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { sendMessage, typeText } from 'src/actions';
import './styles.scss';

// == Composant
const InputMessage = () => {
  const textValue = useAppSelector((state) => state.text);
  const dispatch = useDispatch();

  const input = useRef(null);
  useEffect(() => {
    if (!_.isNil(input.current)) {
      input.current.focus();
    }
  }, []);
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(typeText(event.currentTarget.value));
  };
  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !_.isEmpty(textValue)) {
      event.preventDefault();
      dispatch(sendMessage());
      dispatch(typeText(''));
    }
  };
  const handleClickBtn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!_.isEmpty(textValue)) {
      dispatch(sendMessage());
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
      />
      <button
        className="inputMessage__btn"
        type="submit"
        onClick={handleClickBtn}
      >
        &gt;
      </button>
    </form>
  );
};

// == Export
export default InputMessage;
