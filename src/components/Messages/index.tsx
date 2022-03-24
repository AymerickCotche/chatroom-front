// == Import
import * as React from 'react';
import { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useAppSelector } from 'src/hooks';
import './styles.scss';

// == Composant
const Messages = () => {
  const messagesArea = useRef(null);
  const messages = useAppSelector((state) => state.messages);

  useEffect(() => {
    if (!_.isNil(messagesArea)) {
      messagesArea.current.scrollTop += messagesArea.current.scrollHeight;
    }
  }, [messages.length]);

  const ejsMessage = (
    messages.map((message) => (
      <ul className="messages__message" key={message.id}>
        <li className="messages__message__infos" key={message.id}>
          <span className="messages__message__infos__author">{message.author}</span>
          <span className="messages__message__infos__date">{message.date}</span>
        </li>
        <li className="messages__message__text">{message.text}</li>
      </ul>
    ))
  );
  return (
    <div className="messages" ref={messagesArea}>
      {ejsMessage}
    </div>
  );
};

// == Export
export default Messages;
