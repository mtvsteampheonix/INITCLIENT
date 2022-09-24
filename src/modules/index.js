import {combineReducers} from 'redux';
import termsReducer from './regist/termsModule';
import applyPageListStatsReducer from './applyPageModule';
import myPageSidebarReducer from './mypage/myPageSidebarModule';
import resumeSelectReducer from './resume/addStepModule';
import resumeMainFormReducer from './resume/resumeFormModule';
import singupplzReducer from './admin/signupplzModule';

const rootReducer = combineReducers({
  termsReducer,
  applyPageListStatsReducer,
  myPageSidebarReducer,
  resumeSelectReducer,
  resumeMainFormReducer,
  singupplzReducer
});

export default rootReducer;
