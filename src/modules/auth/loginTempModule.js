// 0 : 일반

import {handleActions} from 'redux-actions';
const initState = {
  id: '',
  password: ''
};

export const GET_LOGIN_DATA = 'auth/GET_LOGIN_DATA';

const loginTempReducer = handleActions(
  {
    [GET_LOGIN_DATA]: (state, {payload}) => payload
  },
  initState
);

export default loginTempReducer;
