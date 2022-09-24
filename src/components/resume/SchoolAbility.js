import {
  SchoolNamePeriodContainer,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  SchoolContentBar,
  SchoolMenuBar,
  SchoolMenuBarName,
  SchoolMenuBarPeriod,
  SchoolMenuBarMajor,
  SchoolMenuBarScore,
  SchoolMenuBarStatus,
  SchoolMenuBarDelete
} from '../../components/resume/MainResume';
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function SchoolAbility({register, setValue}) {
  const [schoolCount, setSchoolCount] = React.useState(1);
  const [school, setSchool] = React.useState('');

  const schoolOnClilckHandler = (e) => {
    setSchoolCount(schoolCount + 1);
  };
  const schoolContentHandler = () => {
    const result = [];
    for (let i = schoolCount; i > 0; i--) {
      result.push(
        <SchoolContentBar>
          <SchoolNamePeriodContainer>
            <Select
              sx={{m: 1, minWidth: 80}}
              size='small'
              id='demo-select-small'
              defaultValue='중학교'
              {...register('schoolDivision')}
            >
              <MenuItem value='중학교'>중학교</MenuItem>
              <MenuItem value='고등학교'>고등학교</MenuItem>
              <MenuItem value='2년제 대학'>2년제 대학</MenuItem>
              <MenuItem value='4년제 대학'>4년제 대학</MenuItem>
            </Select>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '15ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                label='학교명'
                variant='outlined'
                size='small'
                type='text'
                defaultValue=''
                {...register('schoolName')}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
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
                defaultValue=''
                {...register('schoolStartDate')}
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
                defaultValue=''
                {...register('schoolEndDate')}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
          <Box
            component='form'
            sx={{
              '& > :not(style)': {m: 1, width: '15ch'}
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='outlined-basic'
              label='전공학과'
              variant='outlined'
              size='small'
              type='text'
              defaultValue=''
              {...register('major')}
            ></TextField>
          </Box>
          <SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '7ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                variant='outlined'
                size='small'
                type='text'
                defaultValue=''
                {...register('recordedScore')}
              ></TextField>
            </Box>
            /
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '7ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                variant='outlined'
                size='small'
                type='text'
                defaultValue=''
                {...register('totalScore')}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
          <Select
            sx={{m: 1, minWidth: 80}}
            size='small'
            id='demo-select-small'
            // onChange={onChangeStatusHandler}
            defaultValue='재학'
            {...register('schoolStatus')}
          >
            <MenuItem value='재학'>재학</MenuItem>
            <MenuItem value='수료'>수료</MenuItem>
            <MenuItem value='졸업'>졸업</MenuItem>
          </Select>
          <DeleteBoxContainer>
            <DeleteForeverIcon
              onClick={() => {
                setSchoolCount(schoolCount - 1);
              }}
            ></DeleteForeverIcon>
          </DeleteBoxContainer>
        </SchoolContentBar>
      );
    }
    return result;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>학력사항</ResumeTitleText>
        <SchoolMainContainer>
          <SchoolMenuBar>
            <SchoolMenuBarName>학교명</SchoolMenuBarName>
            <SchoolMenuBarPeriod>기간</SchoolMenuBarPeriod>
            <SchoolMenuBarMajor>전공학과</SchoolMenuBarMajor>
            <SchoolMenuBarScore>학점</SchoolMenuBarScore>
            <SchoolMenuBarStatus>상태</SchoolMenuBarStatus>
            <SchoolMenuBarDelete>삭제</SchoolMenuBarDelete>
          </SchoolMenuBar>
          {schoolContentHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button variant='outlined' onClick={schoolOnClilckHandler}>
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}

export default SchoolAbility;
