import {createActions, handleActions} from 'redux-actions';

const applyPageListStats = 0;

export const GET_LIST_NUMBER = 'apply/GET_LIST_NUMBER';

const applyPageListActions = createActions({
  GET_LIST_NUMBER: () => {}
});

const applyPageListStatsReducer = handleActions(
  {
    [GET_LIST_NUMBER]: (state, {payload}) => {
      return payload;
    }
  },
  applyPageListStats
);

export default applyPageListStatsReducer;
