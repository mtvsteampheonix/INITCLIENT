import {
  Button,
  Grid,
  TextField,
  Typography,
  Stack,
  Divider,
  Box
} from '@mui/material';
import FaxIcon from '@mui/icons-material/Fax';
import {Link} from 'react-router-dom';
export default function InputFormEnt() {
  return (
    <>
      <Grid container marginBottom={10} marginTop={10}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            기업 회원 가입
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={2}
            marginBottom={5}
            marginTop={5}
          >
            <Grid item xs={12}>
              <TextField fullWidth label='회사명' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='사업자 등록번호' />
            </Grid>
            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='담당자 이름' />
            </Grid>
            <Grid item xs={9}>
              <TextField type='email' fullWidth label='이메일' />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant='contained' sx={{height: '100%'}}>
                이메일 인증
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label='인증번호 입력' />
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant='contained' sx={{height: '100%'}}>
                확인
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant='contained' sx={{height: '100%'}}>
                재요청
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField type='phone' fullWidth label='휴대폰 번호' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='홈페이지 주소' />
            </Grid>
            <Grid item xs={12}>
              <Divider variant='middle' />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='아이디' />
            </Grid>
            <Grid item xs={12}>
              <TextField type='password' fullWidth label='비밀번호' />
            </Grid>
            <Grid item xs={12}>
              <TextField type='password' fullWidth label='비밀번호 확인' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} display='flex' alignContent='center'>
          <img
            style={{textAlign: 'center', width: '300px'}}
            src='/titleLogo.svg'
            alt='titleLogo'
          />
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            width='50%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            border='1px solid black'
            borderRadius='10px'
            padding={3}
          >
            <Typography height='100%' variant='body'>
              사업자 등록증은 팩스로 보내주시기 바랍니다.{' '}
            </Typography>

            <Typography variant='body'>
              <FaxIcon />
              팩스: 000-123-4567
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={5}>
          <Button
            fullWidth
            component={Link}
            to='/member/login'
            variant='contained'
            sx={{height: '6em'}}
          >
            가입하기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
