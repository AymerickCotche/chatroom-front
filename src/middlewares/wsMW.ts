import { Middleware } from 'redux';
import { WS_CONNECT, WS_SEND_TO_SERVER } from 'src/actions';

declare global {
  interface Window {
    io: any;
  }
}

const wsMW: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      const socket = window.io('http://192.168.1.19:3001/');

      socket.on('server_message', (message: string) => {
        console.log(message);
      });

      socket.emit('client_message', { text: 'coucou' });
      break;
    }
    case WS_SEND_TO_SERVER: {
      const socket = window.io('http://192.168.1.19:3001/');
      socket.emit('client_message', { message: store.getState().text, author: store.getState().user.pseudo });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default wsMW;
