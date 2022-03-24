import { v4 as uuidv4 } from 'uuid';
import {
  SEND_MESSAGE,
  TYPE_TEXT,
  TOGGLE_OPEN,
  TYPE_EMAIL,
  TYPE_PASSWORD,
  SUBMIT_SETTINGS_FORM,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
    pseudo: string,
    email: string,
    password: string,
  },
  settingsOpen: boolean,
  settingsInput: {
    email: string,
    password: string,
  },
  settingsMessage: string
}

const initialState: CounterState = {
  messages: [],
  text: '',
  user: {
    pseudo: '',
    email: '',
    password: '',
  },
  settingsOpen: false,
  settingsInput: {
    email: '',
    password: '',
  },
  settingsMessage: 'Veuillez vous connecter',
};

const reducer = (
  state = initialState,
  action:{
    type?: string,
    message?: typeof initialState['messages'][0],
    text?: string,
    email?: string,
    password?: string,
    payload?: string
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
    case TOGGLE_OPEN:
      return { ...state, settingsOpen: !state.settingsOpen };
    case TYPE_EMAIL:
      return { ...state, settingsInput: { ...state.settingsInput, email: action.email } };
    case TYPE_PASSWORD:
      return { ...state, settingsInput: { ...state.settingsInput, password: action.password } };
    case SUBMIT_SETTINGS_FORM:
      return {
        ...state,
        user: {
          email: state.settingsInput.email,
          password: state.settingsInput.password,
          pseudo: state.settingsInput.email,
        },
      };
    case LOGIN_SUCCESS:
      return { ...state, user: { ...state.user, pseudo: action.payload }, settingsMessage: `Bienvenue ${action.payload}` };
    case LOGIN_FAILED:
      return { ...state, settingsMessage: 'Email ou mot de passe incorrect' };
    default:
      return state;
  }
};

export default reducer;
