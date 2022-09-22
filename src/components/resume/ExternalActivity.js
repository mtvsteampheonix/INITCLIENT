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
  ActivityDivision,
  ActivityPeriod,
  ActivityInstitution,
  ActivityName,
  ActivityDelete,
  EtcDetailContentPositionContainer
} from '../../components/resume/MainResume';
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function ExternalActivity() {
  const [externalCount, setExternalCount] = React.useState(1);
  const [external, setExternal] = React.useState('');
  const onChangeExternalHandler = (e) => {
    setExternal(e.target.value);
  };

  const externalActivityHandler = () => {
    const externalResult = [];
    for (let i = externalCount; i > 0; i--) {
      externalResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 120}}
              size='small'
              id='demo-select-small'
              onChange={onChangeExternalHandler}
            >
              <MenuItem value='봉사활동'>봉사활동</MenuItem>
              <MenuItem value='어학연수'>어학연수</MenuItem>
              <MenuItem value='교환학생'>교환학생</MenuItem>
            </Select>
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
                  label='국가명'
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
                label='기관/경험명'
                variant='outlined'
                size='small'
                type='text'
              ></TextField>
            </Box>
            <DeleteBoxContainer>
              <DeleteForeverIcon
                onClick={() => {
                  setExternalCount(externalCount - 1);
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
    return externalResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>해외 경험</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>기간</ActivityPeriod>
            <ActivityInstitution>국가</ActivityInstitution>
            <ActivityName>기관/경험명</ActivityName>
            <ActivityDelete>삭제</ActivityDelete>
          </CareerMenuBar>

          {externalActivityHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button
          variant='outlined'
          onClick={() => {
            setExternalCount(externalCount + 1);
          }}
        >
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}

export default ExternalActivity;
