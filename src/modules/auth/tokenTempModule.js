// 0 : 일반

import {handleActions} from 'redux-actions';
const initState = {
  name: '임시 이름',
  kind: 0 // 0: 비회원, 1: 개인 회원, 2: 기업회원, 3: 어드민
};

export const GET_TOKEN_DATA = 'auth/GET_LOGIN_DATA';

const tokenTempReducer = handleActions(
  {
    [GET_TOKEN_DATA]: (state, {payload}) => payload
  },
  initState
);

export default tokenTempReducer;
