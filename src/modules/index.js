import {combineReducers} from 'redux';
import tempReducer from './TempModule';

const rootReducer = combineReducers({
  tempReducer
});

export default rootReducer;
