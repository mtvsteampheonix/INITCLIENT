import {ClassNames} from '@emotion/react';
import {makeStyles, TextField, Typography} from '@mui/material';
import {Paper} from '@mui/material';
import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  gap: 20px;
`;

function SelfIntroductionList() {
  const questionList = {
    question1: '나의 성장과정',
    question2: '입사포부',
    question3: '나의 장점과 단점'
  };

  return (
    <>
      <Items>
        <Paper elevation={2}>
          <TextField
            multiline={true}
            rows={12}
            id='outlined-helperText'
            label={questionList.question1}
            InputProps={{
              sx: {height: '300px', width: '980px'}
            }}
          />
        </Paper>
        <Paper elevation={2}>
          <TextField
            multiline={true}
            rows={12}
            id='outlined-helperText'
            label={questionList.question2}
            InputProps={{sx: {height: '300px', width: '980px'}}}
          />
        </Paper>
        <Paper elevation={2}>
          <TextField
            multiline={true}
            rows={12}
            id='outlined-helperText'
            label={questionList.question3}
            InputProps={{sx: {height: '300px', width: '980px'}}}
          />
        </Paper>
        <Typography fontSize='small'>
          400자 이상 500자 미만으로 작성을 권장합니다.
        </Typography>
      </Items>
    </>
  );
}

export default SelfIntroductionList;
