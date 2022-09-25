import {GET_TOKEN_DATA} from '../modules/auth/tokenTempModule';

export function CallPostLoginAPI(logindata) {
  console.log('함수호출');
  return async function postLogin(dispatch, getState) {
    const tempUserDetails = [
      {
        id: 'test01',
        password: 'test01',
        name: '김승수',
        kind: 1 // 0: 비회원, 1: 개인 회원, 2: 기업회원, 3: 어드민
      },
      {
        id: 'test02',
        password: 'test02',
        name: '유재석',
        kind: 2 // 0: 비회원, 1: 개인 회원, 2: 기업회원, 3: 어드민
      },
      {
        id: 'admin',
        password: 'admin',
        name: '어드민',
        kind: 3 // 0: 비회원, 1: 개인 회원, 2: 기업회원, 3: 어드민
      }
    ];
    const foundMember = tempUserDetails.filter(
      (detail) => logindata.id == detail.id
    );
    if (foundMember.length > 0) {
      if (foundMember[0].password == logindata.password) {
        console.log('로그인 성공');
        return dispatch({
          type: GET_TOKEN_DATA,
          payload: {
            name: foundMember[0].name,
            kind: foundMember[0].kind
          }
        });
      }
    }
    console.log('로그인 실패');
    return dispatch({
      type: GET_TOKEN_DATA,
      payload: {name: '비회원', kind: 0, message: '실패'}
    });
  };
}
