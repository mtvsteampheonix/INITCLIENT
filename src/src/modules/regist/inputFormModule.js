import {createActions} from 'redux-actions';
const initstate = {
  name: '',
  id: '',
  password: '',
  email: '',
  emailChecked: false
};

export const GET_REGISTDATAS = 'registData/GET_FORM_DATAS';

const action = createActions({
  [GET_REGISTDATAS]: () => {}
});

const registDatasReducer = createActions(
  {
    [GET_REGISTDATAS]: (state, {payload}) => payload
  },
  initstate
);
