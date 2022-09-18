import {Button, Grid, Typography} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from 'react-router-dom';
export default function RegistSuccess() {
  return (
    <>
      <Grid container justifyContent='center' marginTop={10} marginBottom={10}>
        <Grid item>
          <CheckCircleIcon color='primary' sx={{fontSize: '100px'}} />
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            회원가입이 완료되었습니다.
          </Typography>
          <Typography align='center' variant='h4'>
            저희
            <Typography component='span' variant='h4' color='primary'>
              INIT
            </Typography>
            과 함께해주셔서 감사합니다.
          </Typography>
          <Grid item xs={12} display='flex' justifyContent='center' margin={10}>
            <Button
              component={Link}
              to='/member/login'
              variant='contained'
              sx={{height: '100%', height: '70px'}}
            >
              로그인페이지로 이동
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
