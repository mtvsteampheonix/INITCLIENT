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

function ForeignAbility() {
  const [languageCount, setLanguageCount] = React.useState(1);
  const foreignLanguageActivityHandler = () => {
    const languageResult = [];
    for (let i = languageCount; i > 0; i--) {
      languageResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 115}}
              size='small'
              id='demo-select-small'
              // onChange={onChangeExternalHandler}
            >
              <MenuItem value='국가 공인'>국가 공인</MenuItem>
              <MenuItem value='민간'>민간</MenuItem>
            </Select>
            <Select
              sx={{m: 1, minWidth: 300}}
              size='small'
              id='demo-select-small'
              // onChange={onChangeLanguageHandler}
            >
              <MenuItem value='TOEIC'>TOEIC</MenuItem>
              <MenuItem value='TOFEL'>TOFEL</MenuItem>
              <MenuItem value='TEPS'>TEPS</MenuItem>
            </Select>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='점수(등급)'
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
                variant='outlined'
                size='small'
                type='date'
              ></TextField>
            </Box>
            <DeleteBoxContainer>
              <DeleteForeverIcon
                onClick={() => {
                  setLanguageCount(languageCount - 1);
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
    return languageResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>외국어 능력</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>공인시험</ActivityPeriod>
            <ActivityInstitution>점수(등급)</ActivityInstitution>
            <ActivityName>응시일</ActivityName>
            <ActivityDelete>삭제</ActivityDelete>
          </CareerMenuBar>

          {foreignLanguageActivityHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button
          variant='outlined'
          onClick={() => {
            setLanguageCount(languageCount + 1);
          }}
        >
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}

export default ForeignAbility;
