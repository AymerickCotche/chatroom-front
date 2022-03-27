// == Import
import _ from 'lodash';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'src/hooks';
import Message from 'src/components/Message';
import './styles.scss';

// == Composant
const Messages = () => {
  const messagesArea = useRef(null);
  const messages = useAppSelector((state) => state.messages);
  useEffect(() => {
    if (!_.isNil(messagesArea) && messages.length > 0) {
      messagesArea.current.scrollTop += messagesArea.current.scrollHeight;
    }
  }, [messages.length]);

  return (
    <div className="messages" ref={messagesArea}>
      {messages.map((message) => (
        <Message
          key={message.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...message}
        />
      ))}
    </div>
  );
};

// == Export
export default Messages;
