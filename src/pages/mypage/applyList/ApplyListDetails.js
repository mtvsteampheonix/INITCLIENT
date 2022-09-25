import {Grid, Typography, Button, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const recruitDetails = {
  companyName: '인텔리안테크',
  companyCategory: '강소기업',
  recruitTitle: '자바 웹 퍼블리싱',
  companyURL: 'http://wwww.asdasda1324asdd12g.co.kr',
  applyDate: '2022-09-01',
  companyImage: '/companyImage.jpg',
  resumeTitle: '신입도 사람이다',
  resumeImage: '/bommi.jpg',
  portfolio: '불사조',
  selfIntroductionQuestion: ['나의 성장과정', '입사포부', '나의 장점과 단점'],
  answerList: [
    '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세',
    '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세',
    '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세'
  ],
  process: '합격'
};

function ApplyListDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='flex-end'
      >
        <Grid item xs={3} marginBottom='5px' gap='20px'>
          {recruitDetails.process == '진행중' ? (
            <LoadingButton
              loading={true}
              loadingPosition='start'
              startIcon={<SaveIcon />}
              variant='outlined'
            >
              진행중
            </LoadingButton>
          ) : recruitDetails.process == '불합격' ? (
            <Button
              sx={{width: '100px', backgroundColor: '#ff0000', color: 'white'}}
              endIcon={<SaveIcon />}
            >
              불합격
            </Button>
          ) : (
            <Button
              sx={{width: '100px', backgroundColor: '#4199e1', color: 'white'}}
              variant='outlined'
            >
              수락
            </Button>
          )}
          <Link sx={{textDecoration: 'none'}}></Link>
        </Grid>
        <Grid item xs={9} textAlign='right' marginBottom='-5px'>
          <img src={recruitDetails.companyImage} width='120px' height='120px' />
        </Grid>
      </Grid>
      <Grid container marginBottom='40px'>
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            기업이름
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitDetails.companyName}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            기업분류
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitDetails.companyCategory}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            공고제목
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitDetails.recruitTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            홈페이지
          </Typography>
        </Grid>
        <Grid item xs={9.5}>
          <Typography marginLeft='10px' fontSize='30px'>
            {recruitDetails.companyURL}
          </Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid
          item
          xs={2.5}
          borderLeft='4px solid #4199e1'
          sx={{borderRadius: '5px'}}
          marginBottom='15px'
        >
          <Typography marginLeft='10px' fontSize='30px'>
            자기소개서 항목
          </Typography>
        </Grid>
        <Grid item xs={9.5} display='flex'>
          <Typography
            marginLeft='10px'
            fontSize='30px'
            onClick={() => {
              alert(recruitDetails.answerList[0]);
            }}
          >
            {recruitDetails.selfIntroductionQuestion[0]},{' '}
          </Typography>
          <Typography
            marginLeft='10px'
            fontSize='30px'
            onClick={() => {
              alert(recruitDetails.answerList[1]);
            }}
          >
            {recruitDetails.selfIntroductionQuestion[1]},{' '}
          </Typography>
          <Typography
            marginLeft='10px'
            fontSize='30px'
            onClick={() => {
              alert(recruitDetails.answerList[2]);
            }}
          >
            {recruitDetails.selfIntroductionQuestion[2]}
          </Typography>
        </Grid>
        <Grid item xs={12} />
      </Grid>

      <Grid container>
        <Grid item xs={3.1}>
          <Typography borderLeft='4px solid #4199e1' sx={{borderRadius: '5px'}}>
            <Typography marginLeft='10px' fontSize='30px'>
              지원 이력서
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px'>
                {recruitDetails.recruitTitle}
              </Typography>
            </Grid>
            <Grid item xs={1} marginTop='23px'>
              <img
                src={recruitDetails.resumeImage}
                width='120px'
                height='120px'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} marginTop='20px' />
        <Grid item xs={3.1}>
          <Typography borderLeft='4px solid #4199e1' sx={{borderRadius: '5px'}}>
            <Typography marginLeft='10px' fontSize='30px'>
              지원 포트폴리오
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px' marginTop='30px'>
                {recruitDetails.portfolio}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} marginTop='20px' />
        <Grid item xs={3.1}>
          <Typography
            marginLeft='0px'
            fontSize='30px'
            borderLeft='4px solid #4199e1'
            sx={{borderRadius: '5px'}}
          >
            <Typography fontSize='30px' marginLeft='10px'>
              지원 일자
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={8.9}>
          <Grid container>
            <Grid
              item
              xs={10.3}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Typography marginLeft='10px' fontSize='42px' marginTop='30px'>
                {recruitDetails.applyDate}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} marginTop='200px' />
        <Grid xs={12} textAlign='center'>
          <Button
            onClick={() => {
              navigate('/mypage/apply-list');
            }}
            sx={{width: '200px', marginLeft: '20px', height: '50px'}}
            variant='outlined'
          >
            확인
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ApplyListDetails;
