export const SEND_MESSAGE = 'SEND_MESSAGE';
export const TYPE_TEXT = 'TYPE_TEXT';
export const TYPE_EMAIL = 'TYPE_EMAIL';
export const TYPE_PASSWORD = 'TYPE_PASSWORD';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SUBMIT_SETTINGS_FORM = 'SUBMIT_SETTINGSFORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const WS_CONNECT = 'WS_CONNECT';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const toggleOpenSetting = () => ({
  type: TOGGLE_OPEN,
});

export const typeText = (valueText: string) => ({
  type: TYPE_TEXT,
  text: valueText,
});
export const typeEmail = (inputValue: string) => ({
  type: TYPE_EMAIL,
  email: inputValue,
});
export const typePassword = (inputValue: string) => ({
  type: TYPE_PASSWORD,
  password: inputValue,
});

export const submitSettingsForm = () => ({
  type: SUBMIT_SETTINGS_FORM,
});

export const loginSucess = (payload: string) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});
