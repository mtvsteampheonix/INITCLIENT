import {ClassNames} from '@emotion/react';
import {makeStyles, TextField} from '@mui/material';
import {Paper} from '@mui/material';
import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  width: 980px;
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
        <TextField
          multiline={true}
          rows={12}
          id='outlined-helperText'
          label={questionList.question1}
          InputProps={{
            sx: {height: '300px', width: '980px'}
          }}
        />
        <TextField
          multiline={true}
          rows={12}
          id='outlined-helperText'
          label={questionList.question2}
          InputProps={{sx: {height: '300px', width: '980px'}}}
        />
        <TextField
          multiline={true}
          rows={12}
          id='outlined-helperText'
          label={questionList.question3}
          helperText='400자 이상 500자 미만으로 작성을 권장합니다.'
          InputProps={{sx: {height: '300px', width: '980px'}}}
        />
      </Items>
    </>
  );
}

export default SelfIntroductionList;
