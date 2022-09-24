import {handleActions} from 'redux-actions';

const initState = [
  {
    singupNum: 0,
    id: '',
    name: '',
    companyName: '',
    signupDate: '',
    ceoName: '',
    email: '',
    siteUrl: '',
    phone: '',
    registNumber: ''
  }
];

export const GET_SIGNUPLIST = 'admin/GET_SIGNUPLIST';

const singupplzReducer = handleActions(
  {
    [GET_SIGNUPLIST]: (state, {payload}) => payload
  },
  initState
);

export default singupplzReducer;
