import {combineReducers} from 'redux';
import termsReducer from './regist/termsModule';
import applyPageListStatsReducer from './applyPageModule';

const rootReducer = combineReducers({
  termsReducer,
  applyPageListStatsReducer
});

export default rootReducer;
