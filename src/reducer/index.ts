import { v4 as uuidv4 } from 'uuid';
import {
  SEND_MESSAGE,
  TYPE_TEXT,
} from 'src/actions';

interface CounterState {
  messages: {
    author: string;
    text: string;
    date: string;
    id: string
  }[],
  text: string,
  user: {
    pseudo: string
  }
}

const initialState: CounterState = {
  messages: [],
  text: '',
  user: {
    pseudo: 'leChat',
  },
};

const reducer = (
  state = initialState,
  action:{
    type?: string,
    message?: typeof initialState['messages'][0],
    text?: string
  } = {},
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: uuidv4(),
          author: state.user.pseudo,
          text: state.text,
          date: new Date().toLocaleString(),
        },
        ],
      };
    case TYPE_TEXT:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default reducer;
