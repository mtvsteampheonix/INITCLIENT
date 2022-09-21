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
import DaumPostcode from 'react-daum-postcode';
import Modal from '@mui/material/Modal';

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

const PersonalDetailImageFrame = styled.img`
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

const ActivityDivision = styled.div`
  width: 128px;
  height: 29px;
  text-align: center;
`;

const ActivityPeriod = styled.div`
  width: 305px;
  height: 29px;
  text-align: center;
`;

const ActivityInstitution = styled.div`
  width: 171px;
  height: 29px;
  text-align: center;
`;

const ActivityName = styled.div`
  width: 231px;
  height: 29px;
  text-align: center;
`;

const ActivityDelete = styled.div`
  width: 50px;
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

const EtcDetailContentPositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 16px;

  // border-bottom: 1px solid black;

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
  margin-bottom: 40px;
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

function AddStepDetail() {
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [schoolCount, setSchoolCount] = React.useState(1);
  const [careerCount, setCareerCount] = React.useState(1);
  const [postCode, setPostCode] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [zipCode, setZipCode] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [awardsCount, setAwardsCount] = React.useState(1);
  const [awards, setAwards] = React.useState('');
  const [externalCount, setExternalCount] = React.useState(1);
  const [external, setExternal] = React.useState('');
  const [languageCount, setLanguageCount] = React.useState(1);
  const [experienceCount, setExperienceCount] = React.useState(1);
  const [imgSrc, setImgSrc] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const navigate = useNavigate();

  // resume의 값에 따라 이력서 유형이 달라짐.
  // activity : 학력 & 활동 중심형
  // training : 훈련 & 자격 중심형
  // 그 외는 기본형
  const resumeType = '';

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  const onChangeHandler = (e) => {
    setGender(e.target.value);
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSchoolHandler = (e) => {
    setSchool(e.target.value);
  };

  const onChangeAwardHandler = (e) => {
    setAwards(e.target.value);
  };

  const onChangeExternalHandler = (e) => {
    setExternal(e.target.value);
  };

  // const onChangeLanguageHandler = (e) => {
  //   setLanguage(e.target.value);
  // };

  const AddPhotoHandler = (e) => {
    alert('사진 선택');
  };
  const onClickHandler = (e) => {};

  const schoolOnClilckHandler = (e) => {
    setSchoolCount(schoolCount + 1);
  };

  const onCompleteHandler = (data) => {
    setZipCode(data.zonecode);
    setAddress(data.address);
    document.getElementById('address2').focus();

    console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
    setPostCode(false);
  };

  const onToggleModal = (e) => {
    setPostCode(!postCode);
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
              onChange={onChangeSchoolHandler}
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
            onChange={onChangeSchoolHandler}
            defaultValue='선택'
          >
            <MenuItem value='선택'>선택</MenuItem>
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

  const awardAndCoreActivityHandler = () => {
    const activityResult = [];
    for (let i = awardsCount; i > 0; i--) {
      activityResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 120}}
              size='small'
              id='demo-select-small'
              onChange={onChangeAwardHandler}
            >
              <MenuItem value='장관상'>장관상</MenuItem>
              <MenuItem value='국무총리상'>국무총리상</MenuItem>
              <MenuItem value='대통령상'>대통령상</MenuItem>
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
                  label='기관명'
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
                label='수상/활동명'
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
    return activityResult;
  };

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
            {imgSrc ? (
              <PersonalDetailImageFrame
                src={imgSrc}
                alt='preview'
              ></PersonalDetailImageFrame>
            ) : (
              <PersonalDetailImageFrame></PersonalDetailImageFrame>
            )}
            <Button variant='outlined' component='label'>
              사진 첨부
              <input
                hidden
                accept='image/*'
                multiple
                type='file'
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
              />
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
                      id='addressZipCode'
                      label='우편번호'
                      variant='outlined'
                      size='small'
                      value={zipCode}
                    ></TextField>
                  </Box>
                  <Button variant='outlined' onClick={onToggleModal}>
                    우편번호 찾기
                  </Button>
                  {postCode && (
                    <Modal
                      open={postCode}
                      onClose={onToggleModal}
                      aria-labelledby='modal-modal-title'
                      aria-describedby='modal-modal-description'
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 600,
                          bgcolor: 'background.paper',
                          border: '2px solid #000',
                          boxShadow: 24,
                          p: 4
                        }}
                      >
                        <DaumPostcode
                          onComplete={onCompleteHandler} // 값을 선택할 경우 실행되는 이벤트
                          autoClose={true} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                          // defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어
                          defaultQuery='창업로 17'
                        />
                      </Box>
                    </Modal>
                  )}
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
                      id='address1'
                      label='주소'
                      variant='outlined'
                      size='small'
                      value={address}
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
                      id='address2'
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
            {schoolContentHandler()}
          </SchoolMainContainer>
        </SchoolCareerContainer>
        <SchoolCareerAddButtonContainer>
          <Button variant='outlined' onClick={schoolOnClilckHandler}>
            항목 추가
          </Button>
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

        {/* 학력 & 활동 중심형*/}
        {resumeType == 'activity' && (
          <>
            <SchoolCareerContainer>
              <ResumeTitleText>주요활동 및 수상경력</ResumeTitleText>
              <SchoolMainContainer>
                <CareerMenuBar>
                  <ActivityDivision>구분</ActivityDivision>
                  <ActivityPeriod>기간</ActivityPeriod>
                  <ActivityInstitution>기관명</ActivityInstitution>
                  <ActivityName>수상/활동명</ActivityName>
                  <ActivityDelete>삭제</ActivityDelete>
                </CareerMenuBar>
                {/* 커리어 컨텐츠 */}
                {awardAndCoreActivityHandler()}
              </SchoolMainContainer>
            </SchoolCareerContainer>
            <SchoolCareerAddButtonContainer>
              <Button
                variant='outlined'
                onClick={() => {
                  setAwardsCount(awardsCount + 1);
                }}
              >
                항목 추가
              </Button>
            </SchoolCareerAddButtonContainer>

            {/* 해외경험 */}
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

            {/* 외국어 능력 */}
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
        )}

        {/* 훈련 & 자격 중심형 이력서 */}

        {resumeType == 'training' && (
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
                {/* 직업훈련 이수이력 컨텐츠 */}
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
        )}

        <Button variant='contained' size='large' type='submit'>
          작성 완료
        </Button>
      </FormContainer>
    </OutletContainer>
  );
}

export default AddStepDetail;
