import styled from 'styled-components';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AutoSelect from '../../components/resume/AutoSelect';
import CareerComponent from '../../components/resume/CareerComponent';
import CoreActivity from '../../components/resume/CoreActivity';
import ExternalActivity from '../../components/resume/ExternalActivity';
import ForeignAbility from '../../components/resume/ForeignAbility';
import TrainingCareer from '../../components/resume/TrainingCareer';
import Qualification from '../../components/resume/Qualification';
import SchoolAbility from '../../components/resume/SchoolAbility';
import MainResume from '../../components/resume/MainResume';
import {useForm} from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const OutletContainer = styled.div`
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

export const BackButtonContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 50px;
`;

export const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function ResumeEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const {register, handleSubmit, setValue} = useForm();

  const skillList = [
    'Node.js',
    'React',
    'Spring Boot',
    'Oracle',
    'JPA',
    'Hibernate'
  ];

  const posList = [
    '서버 개발자',
    '프론트 개발자',
    '웹 개발자',
    '자바 개발자',
    'DBA',
    'IOS 개발자'
  ];

  const selectedList = useSelector((state) => state.resumeSelectReducer);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYesHandler = () => {
    setOpen(false);
  };

  // DB 대체
  const variable = {
    title: '호이애의 최고의 이력서',
    name: 'Hoiae',
    gender: 'M',
    birthday: '1996-08-19',
    zipCode: '12345',
    address: '경기도 성남시 시흥로 123',
    address2: '메타버스 허브',
    phone: '02-1234-1234',
    mobilePhone: '010-1234-1234',
    emailFront: 'hoiae',
    emailBack: 'mtvs.com',
    imgSrc:
      'http://image.genie.co.kr/Y/IMAGE/IMG_ARTIST/067/872/918/67872918_1588900211036_19_600x600.JPG'
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
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* 이력서 메인 */}
        <MainResume
          register={register}
          setValue={setValue}
          variable={variable}
          isReadOnly={true}
        />
        {/* 학력사항 */}
        <SchoolAbility register={register} setValue={setValue} />
        {/* 스킬 스택 */}
        <AutoSelect title={'스킬 스택'} list={skillList} />
        {/* 희망 직무 */}
        <AutoSelect title={'희망 직무'} list={posList} />
        {/* 경력사항 */}
        {selectedList.career && <CareerComponent />}
        {/* 주요활동 및 수상경력 */}
        {selectedList.activity && <CoreActivity />}
        {/* 해외경험 */}
        {selectedList.external && <ExternalActivity />}
        {/* 외국어 능력 */}
        {selectedList.foreign && <ForeignAbility />}
        {/* 직업훈련 이수이력 */}
        {selectedList.experience && <TrainingCareer />}
        {/* 보유 자격 면허 */}
        {selectedList.qualification && <Qualification />}
        <div style={{display: 'flex', flexDirection: 'row', gap: '30px'}}>
          <Button
            variant='contained'
            size='large'
            /* type='submit' */ onClick={handleClickOpen}
          >
            삭제하기
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>
              {'삭제하시겠습니까?'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                해당 이력서 정보가 삭제됩니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseYesHandler}>예</Button>
              <Button onClick={handleClose} autoFocus>
                아니오
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            variant='contained'
            size='large'
            /* type='submit' */ onClick={() => {
              navigate(-1);
            }}
          >
            돌아가기
          </Button>
        </div>
      </FormContainer>
    </OutletContainer>
  );
}

export default ResumeEdit;
