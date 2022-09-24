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

function Qualification() {
  const [qualificationCount, setQualificationCount] = React.useState(1);
  const qualificationHandler = () => {
    const qualificationResult = [];
    for (let i = qualificationCount; i > 0; i--) {
      qualificationResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 112}}
              size='small'
              id='demo-select-small'
              // onChange={onChangeExternalHandler}
            >
              <MenuItem value='국가 공인 자격'>국가 공인</MenuItem>
              <MenuItem value='공인 민간 자격'>공인 민간</MenuItem>
              <MenuItem value='공인 민간 자격'>민간</MenuItem>
            </Select>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: 289}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='자격 면허'
                  variant='outlined'
                  size='small'
                  type='text'
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: 156}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='발급 기관'
                  variant='outlined'
                  size='small'
                  type='text'
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: 231}
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
                  setQualificationCount(qualificationCount - 1);
                }}
              ></DeleteForeverIcon>
            </DeleteBoxContainer>
          </CareerContentBar>
          <CareerDetailContentContainer>
            <EtcDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                기타 자격
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox placeholder='입력'></CareerDetailContentPositionTextBox>
            </EtcDetailContentPositionContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return qualificationResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>보유 자격 면허</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>자격 면허</ActivityPeriod>
            <ActivityInstitution>발급 기관</ActivityInstitution>
            <ActivityName>취득일</ActivityName>
            <ActivityDelete>삭제</ActivityDelete>
          </CareerMenuBar>

          {qualificationHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button
          variant='outlined'
          onClick={() => {
            setQualificationCount(qualificationCount + 1);
          }}
        >
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}

export default Qualification;
