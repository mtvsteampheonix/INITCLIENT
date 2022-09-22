import {
  CareerContentBar,
  SchoolNamePeriodContainer,
  CareerDetailContentContainer,
  CareerDetailContentPositionText,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  CareerDetailContentPositionTextBox,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  CareerMenuBar,
  ActivityPeriod,
  ActivityInstitution,
  ActivityName,
  ActivityDelete,
  EtcDetailContentPositionContainer
} from '../../components/resume/MainResume';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function TrainingCareer() {
  const [experienceCount, setExperienceCount] = React.useState(1);
  const experienceHandler = () => {
    const experienceResult = [];
    for (let i = experienceCount; i > 0; i--) {
      experienceResult.push(
        <>
          <CareerContentBar>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 0, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  type='date'
                ></TextField>
              </Box>
              -
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 0, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  type='date'
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '18ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='훈련 기관'
                  variant='outlined'
                  size='small'
                  type='text'
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '25ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                label='훈련 과정명'
                label-align='center'
                variant='outlined'
                size='small'
                type='text'
              ></TextField>
            </Box>
            <DeleteBoxContainer>
              <DeleteForeverIcon
                onClick={() => {
                  setExperienceCount(experienceCount - 1);
                }}
              ></DeleteForeverIcon>
            </DeleteBoxContainer>
          </CareerContentBar>
          <CareerDetailContentContainer>
            <EtcDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                주요 활동
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox placeholder='입력'></CareerDetailContentPositionTextBox>
            </EtcDetailContentPositionContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return experienceResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>직업훈련 이수이력</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityPeriod>기간</ActivityPeriod>
            <ActivityInstitution>훈련 기관</ActivityInstitution>
            <ActivityName>훈련 과정</ActivityName>
            <ActivityDelete>삭제</ActivityDelete>
          </CareerMenuBar>
          {experienceHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button
          variant='outlined'
          onClick={() => {
            setExperienceCount(experienceCount + 1);
          }}
        >
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}

export default TrainingCareer;
