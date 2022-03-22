// == Import
import * as React from 'react';
import { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useAppSelector } from 'src/hooks';
import './styles.scss';

// == Composant
const Messages = () => {
  const messagesArea = useRef(null);
  useEffect(() => {
    if (!_.isNil(messagesArea)) {
      messagesArea.current.scrollTop += messagesArea.current.scrollHeight;
    }
  });
  const messages = useAppSelector((state) => state.messages);
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
      {!_.isEmpty(messages) ? ejsMessage : 'Initiez une conversation'}
    </div>
  );
};

// == Export
export default Messages;
