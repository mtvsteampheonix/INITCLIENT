import {
  CareerContentBar,
  SchoolNamePeriodContainer,
  CareerDetailContentContainer,
  CareerDetailContentPositionContainer,
  CareerDetailContentPositionText,
  CareerDetailContentTechCertificateContainer,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  CareerDetailContentPositionTextBox,
  CareerDetailContentTechCertificateImageUploader,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  CareerMenuBar,
  CareerPeriod,
  CareerCorName,
  CareerPosName,
  CareerStatus,
  CareerDelete
} from '../../components/resume/MainResume';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function CarrerComponent() {
  const [careerCount, setCareerCount] = React.useState(1);
  const [school, setSchool] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const onChangeSchoolHandler = (e) => {
    setSchool(e.target.value);
  };

  const careerHandler = () => {
    const careerResult = [];
    for (let i = careerCount; i > 0; i--) {
      careerResult.push(
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
                  '& > :not(style)': {m: 1, width: '15ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label='회사명'
                  variant='outlined'
                  size='small'
                  type='text'
                ></TextField>
              </Box>
              회사명 비공개 <Checkbox></Checkbox>
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
                label='직급/직책'
                variant='outlined'
                size='small'
                type='text'
              ></TextField>
            </Box>
            <Select
              sx={{m: 1, minWidth: 80}}
              size='small'
              id='demo-select-small'
              onChange={onChangeSchoolHandler}
            >
              <MenuItem value='재직'>재직</MenuItem>
              <MenuItem value='퇴사'>퇴사</MenuItem>
            </Select>
            <DeleteBoxContainer>
              <DeleteForeverIcon
                onClick={() => {
                  setCareerCount(careerCount - 1);
                }}
              ></DeleteForeverIcon>
            </DeleteBoxContainer>
          </CareerContentBar>
          <CareerDetailContentContainer>
            <CareerDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                주요 직무 및 업무
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox placeholder='입력'></CareerDetailContentPositionTextBox>
            </CareerDetailContentPositionContainer>
            <CareerDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                기타 사항
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox placeholder='입력'></CareerDetailContentPositionTextBox>
            </CareerDetailContentPositionContainer>
            <CareerDetailContentTechCertificateContainer>
              기술경력증명서
              <CareerDetailContentTechCertificateImageUploader>
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='label'
                >
                  {fileName && <p>{fileName}</p>}
                  <input
                    hidden
                    accept='image/*'
                    type='file'
                    onChange={(e) => {
                      setFileName(e.target.files[0].name);
                    }}
                  />
                  {!fileName && <PhotoCamera />}
                </IconButton>
              </CareerDetailContentTechCertificateImageUploader>
            </CareerDetailContentTechCertificateContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return careerResult;
  };

  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>경력사항</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <CareerPeriod>기간</CareerPeriod>
            <CareerCorName>회사명</CareerCorName>
            <CareerPosName>직급/직책</CareerPosName>
            <CareerStatus>상태</CareerStatus>
            <CareerDelete>삭제</CareerDelete>
          </CareerMenuBar>
          {/* 커리어 컨텐츠 */}
          {careerHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      <SchoolCareerAddButtonContainer>
        <Button
          variant='outlined'
          onClick={() => {
            setCareerCount(careerCount + 1);
          }}
        >
          항목 추가
        </Button>
      </SchoolCareerAddButtonContainer>
    </>
  );
}
