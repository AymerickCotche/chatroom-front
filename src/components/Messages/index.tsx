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
  const currentUser = useAppSelector((state) => state.user.pseudo);

  useEffect(() => {
    if (!_.isNil(messagesArea)) {
      messagesArea.current.scrollTop += messagesArea.current.scrollHeight;
    }
  }, [messages.length]);

  const ejsMessage = (
    messages.map((message) => {
      const classnames = currentUser === message.author ? 'messages__message messages__message--is-mine' : 'messages__message';
      return (
        <div className={classnames} key={message.id}>
          <p className="messages__message__infos" key={message.id}>
            <span className="messages__message__infos__author">{message.author}</span>
            <span className="messages__message__infos__date">{message.date}</span>
          </p>
          <p className="messages__message__text">{message.text}</p>
        </div>
      );
    })
  );
  return (
    <div className="messages" ref={messagesArea}>
      {ejsMessage}
    </div>
  );
};

// == Export
export default Messages;
