import {applyMiddleware, createStore} from 'redux';
import rootReducer from './modules/index';
import ReduxThunx from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunx));

export default store;
