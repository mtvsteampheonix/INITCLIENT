import {combineReducers} from 'redux';
import termsReducer from './regist/termsModule';
import applyPageListStatsReducer from './applyPageModule';
import myPageSidebarReducer from './mypage/myPageSidebarModule';
const rootReducer = combineReducers({
  termsReducer,
  applyPageListStatsReducer,
  myPageSidebarReducer
});

export default rootReducer;
