export const SEND_MESSAGE = 'SEND_MESSAGE';
export const TYPE_TEXT = 'TYPE_TEXT';
export const INCREMENT_IDCOUNTER = 'INCREMENT_IDCOUNTER';

export const sendMessage = (message: {}) => ({
  type: SEND_MESSAGE,
  message,
});

export const typeText = (valueText: string) => ({
  type: TYPE_TEXT,
  text: valueText,
});

export const incrementIdCounter = (idCounter: number) => ({
  type: INCREMENT_IDCOUNTER,
  idCounter,
});
