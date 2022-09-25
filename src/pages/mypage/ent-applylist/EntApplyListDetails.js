import {TextField, Grid, Box, Paper, Typography, Button} from '@mui/material';
import {dayPickerClasses} from '@mui/x-date-pickers';
import {useNavigate} from 'react-router-dom';

const resumeInfo = {
  title: '신입도 사람이다.',
  name: '김지안',
  duty: '백엔드개발자',
  skills: ['자바', '자바스크립트', 'SpringFrameWork', 'react'],
  image: '/bommi.jpg',
  questionList: {
    question1: '나의 학창시절',
    question2: '나의 장점과 단점',
    question3: '입사포부'
  },
  answerList: {
    answer1:
      '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세',
    answer2:
      '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세',
    answer3:
      '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세'
  }
};

function EntApplyListDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={10} marginLeft={3.6} marginTop={3}>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}이력서 제목
            </Typography>
            <Typography fontSize='30px'>{resumeInfo.title}</Typography>
          </Grid>
          <Grid item xs={1.7} marginLewsft='4px'>
            <img height='150px' src={resumeInfo.image} />
          </Grid>
          <Grid
            item
            xs={12}
            marginLeft={3.6}
            marginBottom='10px'
            marginTop='-45px'
          >
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}이름
            </Typography>
            <Typography fontSize='30px'>{resumeInfo.name}</Typography>
          </Grid>
          <Grid item xs={12} marginLeft={3.6} marginBottom='10px'>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}희망직무
            </Typography>
            <Typography fontSize='30px'>{resumeInfo.duty}</Typography>
          </Grid>
          <Grid item xs={12} marginLeft={3.6} marginBottom='10px'>
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}보유 기술
            </Typography>
            <Typography fontSize='30px'>
              {resumeInfo.skills.map((skill) => (
                <>{skill + ' '}</>
              ))}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            marginLeft={3.6}
            marginBottom='10px'
            marginRight={3}
          >
            <Typography
              fontSize='20px'
              borderLeft='4px solid #4199e1'
              sx={{borderRadius: '5px'}}
            >
              {'\0'}자기소개서
            </Typography>
            <Typography
              marginTop='-10px'
              textAlign='right'
              marginRight={1.3}
              fontSize='30px'
            >
              {resumeInfo.questionList.question1}
            </Typography>
            <Typography>{resumeInfo.answerList.answer1}</Typography>
            <Typography textAlign='right' marginRight={1.3} fontSize='30px'>
              {resumeInfo.questionList.question2}
            </Typography>
            <Typography>{resumeInfo.answerList.answer2}</Typography>
            <Typography textAlign='right' marginRight={1.3} fontSize='30px'>
              {resumeInfo.questionList.question3}
            </Typography>
            <Typography>{resumeInfo.answerList.answer3}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign='right'
            marginRight='35px'
            marginBottom='20px'
          >
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px'
              }}
              variant='outlined'
              onClick={() => navigate('/mypage/ent/apply-list')}
            >
              목록
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
            >
              승인
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
              color='error'
            >
              거절
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default EntApplyListDetails;
