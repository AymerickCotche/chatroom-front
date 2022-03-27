import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import messageSound from 'src/assets/medias/songs/message.mp3';
import useSound from '../../hooks/useSound';
import './styles.scss';

type CounterProps = {
  author: string,
  text: string,
  date: string
};
// == Composant
const Message = ({
  author,
  text,
  date,
} : CounterProps) => {
  useSound(messageSound);
  const currentUser = useAppSelector((state) => state.user.pseudo);
  const isMine = currentUser === author;
  const classnames = isMine ? 'message message--is-mine' : 'message';
  return (
    <div className={classnames}>
      <p className="message__infos">
        <span className="message__infos__author">{author}</span>
        <span className="message__infos__date">{date}</span>
      </p>
      <p className="message__text">{text}</p>
    </div>
  );
};

// == Export
export default Message;
