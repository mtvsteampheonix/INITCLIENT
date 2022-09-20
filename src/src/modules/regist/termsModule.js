import {createActions, handleActions} from 'redux-actions';

const intistate = {
  details: {
    service: '',
    personalInfo: '',
    advertising: ''
  },
  checked: {
    service: false,
    personalInfo: false,
    advertising: false
  }
};

export const SET_TERMSCHECKED = 'terms/SET_TERMS_CHECKED';
const actions = createActions({
  [SET_TERMSCHECKED]: () => {}
});

const termsReducer = handleActions(
  {
    [SET_TERMSCHECKED]: (state, {payload}) => {
      state.checked = payload;
      return {...state};
    }
  },
  intistate
);

export default termsReducer;
