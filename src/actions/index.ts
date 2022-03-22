export const SEND_MESSAGE = 'SEND_MESSAGE';
export const TYPE_TEXT = 'TYPE_TEXT';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

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
