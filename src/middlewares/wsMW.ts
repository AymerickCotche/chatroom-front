import { Middleware } from 'redux';
import { WS_CONNECT } from 'src/actions';

declare global {
  interface Window {
    io: any;
  }
}

const wsMW: Middleware = () => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      const socket = window.io('http://192.168.1.19:3001/');

      socket.on('server_message', (message: string) => {
        console.log(message);
      });

      socket.emit('client_message', { text: 'coucou' });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default wsMW;
