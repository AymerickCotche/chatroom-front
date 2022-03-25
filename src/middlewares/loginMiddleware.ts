import { Middleware } from 'redux';
import axios from 'axios';
import { SUBMIT_SETTINGS_FORM, loginSucess, loginFailed } from 'src/actions';

const loginMiddleware: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SETTINGS_FORM:
      // eslint-disable-next-line no-case-declarations
      const { settingsInput } = store.getState();
      axios({
        method: 'post',
        url: 'http://192.168.1.19:3001/login',
        data: settingsInput,
      })
        .then((res) => {
          store.dispatch(loginSucess(res.data.pseudo));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(loginFailed());
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default loginMiddleware;
