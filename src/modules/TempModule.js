import {createActions, handleActions} from 'redux-actions';

const intistate = {};

export const GET_TEMP = 'temp/GET_TEMP';

const actions = createActions({
  [GET_TEMP]: () => {}
});

const tempReducer = handleActions(
  {
    [GET_TEMP]: (state, {payload}) => {
      return payload;
    }
  },
  intistate
);

export default tempReducer;
