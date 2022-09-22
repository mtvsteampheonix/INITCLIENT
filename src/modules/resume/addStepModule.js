import {createActions, handleActions} from 'redux-actions';

// initialize
const selectResumeInitState = [
  {
    career: false,
    activity: false,
    external: false,
    foreign: false,
    experience: false,
    qualification: false
  }
];

// 액션 상수
export const RESUME_SELECT = 'resume/RESUMESELECT';

// Action function
const {
  resume: {resumeselect}
} = createActions({
  [RESUME_SELECT]: () => {}
});

// reducer
const resumeSelectReducer = handleActions(
  {
    [RESUME_SELECT]: (state, {payload}) => payload
  },
  selectResumeInitState
);

export default resumeSelectReducer;
