import {combineReducers} from 'redux';
import termsReducer from './regist/termsModule';
import applyPageListStatsReducer from './applyPageModule';
import myPageSidebarReducer from './mypage/myPageSidebarModule';
import resumeSelectReducer from './resume/addStepModule';
import resumeMainFormReducer from './resume/resumeFormModule';
import singupplzReducer from './admin/signupplzModule';
import tokenTempReducer from './auth/tokenTempModule';
import loginTempReducer from './auth/loginTempModule';
const rootReducer = combineReducers({
  termsReducer,
  applyPageListStatsReducer,
  myPageSidebarReducer,
  resumeSelectReducer,
  resumeMainFormReducer,
  singupplzReducer,
  tokenTempReducer,
  loginTempReducer
});

export default rootReducer;
