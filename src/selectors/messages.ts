import { CounterState } from 'src/reducer';
// eslint-disable-next-line import/prefer-default-export
export const getIsMine = (author: string) => (
  state: CounterState,
) => state.user.pseudo === author;
