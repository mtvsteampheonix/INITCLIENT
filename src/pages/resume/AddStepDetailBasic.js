import styled from 'styled-components';
import Button from '@mui/material/Button';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {height} from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import {AccessAlarm, ThreeDRotation} from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {useNavigate} from 'react-router-dom';

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;
  gap: 30px;

  width: 100%;
  min-width: 1200px;
`;

const BackButtonContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 50px;
`;

const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

const ResumeTitleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid black;
`;

const ResumeTitleText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

const ResumeTitleTextBox = styled.input`
  width: 100%;
  max-width: 1185px;
  height: 100px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  background: #ffffff;
  border: 5px solid #000000;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResumeText = styled.div`
  width: 100%;
  max-width: 285px;
  height: 77px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  text-align: center;

  color: #000000;
`;

const PersonalDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  background: #ffffff;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  border-width: 3px 0px 3px 0px;
  border-style: solid;
  border-color: #000000;
`;

const PersonalDetailImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 45px;
  gap: 30px;

  max-width: 347px;

  background: #ffffff;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #000000;
`;

const PersonalDetailImageFrame = styled.div`
  width: 257px;
  height: 342px;

  background: #f0f0f0;
`;

const PersonalDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 853px;
  max-width: 853px;

  background: #ffffff;
`;

const PersonalDetailContentTextBox = styled.div`
  width: 100%;
  height: 100px;

  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const PersonalDetailContentTextBoxLast = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PersonalDetailContentTextCard = styled.div`
  height: 47px;
  // width: 175px;
  // max-width: 175px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PersonalDetailContentTextCardLast = styled.div`
  height: 47px;
  // width: 175px;
  // max-width: 175px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PersonalDetailContentTextCardText = styled.div`
  height: 47px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 148.02%;
  display: flex;
  flex-direction: row;
`;

const OrangedColor = styled.div`
  color: #fd4f00;
`;

const DetailTextBox = styled.div`
  border-radius: 5px;
  max-width: 130px;
  height: 36px;
`;
const DetailTextInput = styled.input`
  background: #f0f0f0;
  height: 36px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 28px;
  line-height: 150%;
`;

const PersonalDetailContentTextBox2 = styled.div`
  width: 100%;
  height: 200px;

  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const AddressText = styled.div`
  width: 100px;
  height: 47px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 148.02%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AddressContentContainer = styled.div`
  width: 700px;
  height: 147px;
`;

const PersonalDetailContentTextCardTextType = styled.input`
  max-width: 200px;
  height: 47px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 148.02%;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-color: #dbdbdb #d2d2d2 #d0d0d0 #d2d2d3;
`;

const ImageIsOpenCheckBoxContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ImageIsOpenCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 29px;
  margin-bottom: 40px;
`;

const ImageIsOpenCheckBoxText = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const SchoolCareerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid black;
`;

const SchoolMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  // border-width: 2px 0px;
  // border-style: solid;
  // border-color: #000000;
`;

const SchoolMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
  max-width: 1200px;
  height: 61px;

  border-bottom: 2px solid #000000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const CareerMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  width: 100%;
  max-width: 1200px;
  height: 61px;

  border-bottom: 2px solid #000000;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const CareerPeriod = styled.div`
  width: 300px;
  height: 29px;
  text-align: center;
`;

const CareerCorName = styled.div`
  width: 290px;
  height: 29px;
  text-align: center;
`;

const CareerPosName = styled.div`
  width: 145px;
  height: 29px;
  text-align: center;
`;

const CareerStatus = styled.div`
  width: 88px;
  height: 29px;
  text-align: center;
`;

const CareerDelete = styled.div`
  width: 70px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 241px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarPeriod = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 300px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarMajor = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 145px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarScore = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 158px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarStatus = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 100px;
  height: 29px;
  text-align: center;
`;

const SchoolMenuBarDelete = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 50px;
  height: 29px;
  text-align: center;
`;

const SchoolContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
  max-width: 1200px;
  height: 62px;

  border-bottom: 1px solid #000000;
`;

const CareerContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  width: 100%;
  max-width: 1200px;
  height: 62px;

  border-bottom: 1px solid #000000;
`;

const SchoolNamePeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DeleteBoxContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SchoolCareerAddButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const CareerDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  width: 100%;
  height: fit-content;
  border-bottom: 1px solid black;
`;

const CareerDetailContentPositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 16px;

  border-bottom: 1px solid black;

  width: 1082px;
  height: 176px;
`;

const CareerDetailContentPositionText = styled.div`
  width: 150px;
  height: 19px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const CareerDetailContentPositionTextBox = styled.textarea`
  width: 900px;
  height: 160px;

  background: #f0f0f0;
  border-radius: 5px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

const CareerDetailContentTechCertificateContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1170px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const CareerDetailContentTechCertificateImageUploader = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 5px dashed #dedede;
  height: 156px;
  width: 100%;
  max-width: 1150px;
  gap: 10px;
`;

const FakeButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function AddStepDetail() {
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [school, setSchool] = React.useState('');

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setGender(e.target.value);
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSchoolHandler = (e) => {
    setSchool(e.target.value);
  };

  const AddPhotoHandler = (e) => {
    alert('사진 선택');
  };
  const onClickHandler = (e) => {};

  return (
    <OutletContainer>
      <BackButtonContainter>
        <StyledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </StyledButton>
      </BackButtonContainter>
      <FormContainer action='/' method='post'>
        <ResumeTitleContainer>
          <ResumeTitleText>이력서 제목</ResumeTitleText>
          <ResumeTitleTextBox></ResumeTitleTextBox>
        </ResumeTitleContainer>
        <ResumeText>이 력 서</ResumeText>
        <PersonalDetailContainer>
          <PersonalDetailImageContainer>
            <PersonalDetailImageFrame></PersonalDetailImageFrame>
            <Button variant='outlined' component='label'>
              사진 첨부
              <input hidden accept='image/*' multiple type='file' />
            </Button>
          </PersonalDetailImageContainer>
          <PersonalDetailContentContainer>
            {/* 개별 텍스트 라인 1 */}
            <PersonalDetailContentTextBox>
              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCard>
                <PersonalDetailContentTextCardText>
                  이름<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>
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
                    label='이름'
                    variant='outlined'
                    size='small'
                    placeholder='입력'
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>
              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCard>
                <PersonalDetailContentTextCardText>
                  성별<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>

                <FormControl sx={{m: 1, minWidth: 80}} size='small'>
                  <InputLabel id='gender'>선택</InputLabel>
                  <Select
                    labelId='gender'
                    id='demo-select-small'
                    value={gender}
                    label='선택'
                    onChange={onChangeHandler}
                  >
                    <MenuItem value='M'>남</MenuItem>
                    <MenuItem value='W'>여</MenuItem>
                  </Select>
                </FormControl>
              </PersonalDetailContentTextCard>

              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCard>
                <PersonalDetailContentTextCardText>
                  생년월일<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '20ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    placeholder='입력'
                    type='date'
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>
            </PersonalDetailContentTextBox>

            {/* 개별 텍스트 라인 2 */}
            <PersonalDetailContentTextBox2>
              <AddressText>
                주소<OrangedColor>*</OrangedColor>
              </AddressText>
              <AddressContentContainer>
                <PersonalDetailContentTextCard>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': {m: 1, width: '20ch'}
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField
                      id='outlined-basic'
                      label='우편번호'
                      variant='outlined'
                      size='small'
                    ></TextField>
                  </Box>
                  <Button variant='outlined' onClick={onClickHandler}>
                    우편번호 찾기
                  </Button>
                </PersonalDetailContentTextCard>
                <PersonalDetailContentTextCard>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': {m: 1, width: '60ch'}
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField
                      id='outlined-basic'
                      label='주소'
                      variant='outlined'
                      size='small'
                    ></TextField>
                  </Box>
                </PersonalDetailContentTextCard>
                <PersonalDetailContentTextCard>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': {m: 1, width: '40ch'}
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField
                      id='outlined-basic'
                      label='상세주소'
                      variant='outlined'
                      size='small'
                    ></TextField>
                  </Box>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': {m: 1, width: '35ch'}
                    }}
                    noValidate
                    autoComplete='off'
                  >
                    <TextField
                      id='outlined-basic'
                      label='세부항목'
                      variant='outlined'
                      size='small'
                    ></TextField>
                  </Box>
                </PersonalDetailContentTextCard>
              </AddressContentContainer>
            </PersonalDetailContentTextBox2>

            {/* 개별 텍스트 라인 3 */}
            <PersonalDetailContentTextBox>
              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCard>
                <PersonalDetailContentTextCardText>
                  집 전화<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '27ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='outlined-basic'
                    label='집 전화'
                    variant='outlined'
                    size='small'
                    placeholder='입력'
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>

              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCard>
                <PersonalDetailContentTextCardText>
                  휴대전화<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '27ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='outlined-basic'
                    label='휴대 전화'
                    variant='outlined'
                    size='small'
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>
            </PersonalDetailContentTextBox>

            {/* 개별 텍스트 라인 4 */}
            <PersonalDetailContentTextBoxLast>
              {/* 개별 텍스트 카드 */}
              <PersonalDetailContentTextCardLast>
                <PersonalDetailContentTextCardText>
                  이메일<OrangedColor>*</OrangedColor>
                </PersonalDetailContentTextCardText>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '24ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='outlined-basic'
                    label='이메일'
                    variant='outlined'
                    size='small'
                    type='email'
                  ></TextField>
                </Box>
                @
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
                    value={email}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                  ></TextField>
                </Box>
                <FormControl sx={{m: 1, minWidth: 200}} size='small'>
                  <InputLabel id='email'>이메일 선택</InputLabel>
                  <Select
                    labelId='email'
                    id='demo-select-small'
                    value={email}
                    label='이메일 선택'
                    onChange={onChangeEmailHandler}
                  >
                    <MenuItem value=''>직접 입력</MenuItem>
                    <MenuItem value='google.com'>google.com</MenuItem>
                    <MenuItem value='naver.com'>naver.com</MenuItem>
                  </Select>
                </FormControl>
              </PersonalDetailContentTextCardLast>
            </PersonalDetailContentTextBoxLast>
          </PersonalDetailContentContainer>
        </PersonalDetailContainer>
        <ImageIsOpenCheckBoxContainer>
          <ImageIsOpenCheckBox>
            <Checkbox></Checkbox>
            <ImageIsOpenCheckBoxText>사진 비공개</ImageIsOpenCheckBoxText>
          </ImageIsOpenCheckBox>
        </ImageIsOpenCheckBoxContainer>

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
            <SchoolContentBar>
              <SchoolNamePeriodContainer>
                <Select
                  sx={{m: 1, minWidth: 80}}
                  size='small'
                  id='demo-select-small'
                  value={school}
                  onChange={onChangeSchoolHandler}
                  defaultValue='학력 선택'
                >
                  <MenuItem value='학력 선택'>학력 선택</MenuItem>
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
                  ></TextField>
                </Box>
              </SchoolNamePeriodContainer>
              <Select
                sx={{m: 1, minWidth: 80}}
                size='small'
                id='demo-select-small'
                value={school}
                onChange={onChangeSchoolHandler}
                defaultValue='선택'
              >
                <MenuItem value='선택'>선택</MenuItem>
                <MenuItem value='재학'>재학</MenuItem>
                <MenuItem value='수료'>수료</MenuItem>
                <MenuItem value='졸업'>졸업</MenuItem>
              </Select>
              <DeleteBoxContainer>
                <DeleteForeverIcon></DeleteForeverIcon>
              </DeleteBoxContainer>
            </SchoolContentBar>

            {/* 학력사항 2 */}
            <SchoolContentBar>
              <SchoolNamePeriodContainer>
                <Select
                  sx={{m: 1, minWidth: 80}}
                  size='small'
                  id='demo-select-small'
                  value={school}
                  onChange={onChangeSchoolHandler}
                  defaultValue='학력 선택'
                >
                  <MenuItem value='학력 선택'>학력 선택</MenuItem>
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
                  ></TextField>
                </Box>
              </SchoolNamePeriodContainer>
              <Select
                sx={{m: 1, minWidth: 80}}
                size='small'
                id='demo-select-small'
                value={school}
                onChange={onChangeSchoolHandler}
                defaultValue='선택'
              >
                <MenuItem value='선택'>선택</MenuItem>
                <MenuItem value='재학'>재학</MenuItem>
                <MenuItem value='수료'>수료</MenuItem>
                <MenuItem value='졸업'>졸업</MenuItem>
              </Select>
              <DeleteBoxContainer>
                <DeleteForeverIcon></DeleteForeverIcon>
              </DeleteBoxContainer>
            </SchoolContentBar>
            {/* 학력사항 3 */}
            <SchoolContentBar>
              <SchoolNamePeriodContainer>
                <Select
                  sx={{m: 1, minWidth: 80}}
                  size='small'
                  id='demo-select-small'
                  value={school}
                  onChange={onChangeSchoolHandler}
                  defaultValue='학력 선택'
                >
                  <MenuItem value='학력 선택'>학력 선택</MenuItem>
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
                  ></TextField>
                </Box>
              </SchoolNamePeriodContainer>
              <Select
                sx={{m: 1, minWidth: 80}}
                size='small'
                id='demo-select-small'
                value={school}
                onChange={onChangeSchoolHandler}
                defaultValue='선택'
              >
                <MenuItem value='선택'>선택</MenuItem>
                <MenuItem value='재학'>재학</MenuItem>
                <MenuItem value='수료'>수료</MenuItem>
                <MenuItem value='졸업'>졸업</MenuItem>
              </Select>
              <DeleteBoxContainer>
                <DeleteForeverIcon></DeleteForeverIcon>
              </DeleteBoxContainer>
            </SchoolContentBar>
          </SchoolMainContainer>
        </SchoolCareerContainer>
        <SchoolCareerAddButtonContainer>
          <Button variant='outlined'>항목 추가</Button>
        </SchoolCareerAddButtonContainer>
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
            {/* 커리어 컨텐츠 1 */}
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
                value={school}
                onChange={onChangeSchoolHandler}
              >
                <MenuItem value='재직'>재직</MenuItem>
                <MenuItem value='퇴사'>퇴사</MenuItem>
              </Select>
              <DeleteBoxContainer>
                <DeleteForeverIcon></DeleteForeverIcon>
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
                    <input hidden accept='image/*' type='file' />
                    <PhotoCamera />
                  </IconButton>
                </CareerDetailContentTechCertificateImageUploader>
              </CareerDetailContentTechCertificateContainer>
            </CareerDetailContentContainer>
          </SchoolMainContainer>
        </SchoolCareerContainer>
        <SchoolCareerAddButtonContainer>
          <Button variant='outlined'>항목 추가</Button>
        </SchoolCareerAddButtonContainer>
        <Button variant='contained' size='large' type='submit'>
          작성 완료
        </Button>
      </FormContainer>
    </OutletContainer>
  );
}

export default AddStepDetail;
