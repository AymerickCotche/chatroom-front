import { Middleware } from 'redux';
import { WS_CONNECT, WS_SEND_TO_SERVER, sendMessage } from 'src/actions';

declare global {
  interface Window {
    io: any;
  }
}

const wsMW: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      const socket = window.io('http://192.168.1.19:3001/');

      socket.on('server_message', (message: { text:string, id: number, author: string, date: string }) => {
        store.dispatch(sendMessage(message));
      });
      break;
    }
    case WS_SEND_TO_SERVER: {
      const socket = window.io('http://192.168.1.19:3001/');
      socket.emit('client_message', { text: store.getState().text, author: store.getState().user.pseudo, date: new Date().toLocaleString() });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default wsMW;
