// == Import
import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import { useDispatch } from 'react-redux';
import { sendMessage, typeText, incrementIdCounter } from 'src/actions';
import './styles.scss';

// == Composant
const InputMessage = () => {
  const textValue = useAppSelector((state) => state.text);
  const idCounterValue = useAppSelector((state) => state.idCounter);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(typeText(event.currentTarget.value));
  };
  const handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const date = new Date().toLocaleString();
      dispatch(sendMessage({ author: 'leChat', text: textValue, date }));
      dispatch(incrementIdCounter(idCounterValue + 1));
      dispatch(typeText(''));
    }
  };
  const handleClickBtn = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const date = new Date().toLocaleString();
    dispatch(sendMessage({ author: 'leChat', text: textValue, date }));
    dispatch(incrementIdCounter(idCounterValue + 1));
    dispatch(typeText(''));
  };
  return (
    <form className="inputMessage">
      <input
        type="text"
        placeholder="Saisissez votre message..."
        onChange={handleInputChange}
        onKeyPress={handleEnterKey}
        value={textValue}
      />
      <button
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
