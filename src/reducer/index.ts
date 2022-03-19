import {
  SEND_MESSAGE,
  TYPE_TEXT,
  INCREMENT_IDCOUNTER,
} from 'src/actions';

interface CounterState {
  messages: { author: string; text: string; date: string; }[],
  idCounter : number,
  text: string
}

const initialState: CounterState = {
  messages: [],
  idCounter: 0,
  text: '',
};

const reducer = (
  state = initialState,
  action:{
    type?: string,
    message?: typeof initialState['messages'][0],
    idCounter?: number,
    text?: string
  } = {},
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.message] };
    case TYPE_TEXT:
      return { ...state, text: action.text };
    case INCREMENT_IDCOUNTER:
      return { ...state, idCounter: action.idCounter };
    default:
      return state;
  }
};

export default reducer;
