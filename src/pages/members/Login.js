import {
  Avatar,
  ButtonGroup,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Grid,
  Link
} from '@mui/material';
import {Box, Container} from '@mui/system';
function Login() {
  return (
    <>
      <Container component='main'>
        <CssBaseline />
        <Box
          sx={{
            MainTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            src='/logo.png'
            sx={{m: 1, bgcolor: '#4199e1', borderRadius: '5px'}}
            variant='square'
          ></Avatar>
          <Typography component='h1' variant='h5'>
            sign in
          </Typography>
          <ButtonGroup
            variant='contained'
            aria-label='selectedMemberType'
            sx={{marginTop: 8}}
          >
            <Button sx={{width: '200px', backgroundColor: '#A9A9A9'}}>
              개인회원
            </Button>
            <Button sx={{width: '200px', backgroundColor: '#A9A9A9'}}>
              기업회원
            </Button>
          </ButtonGroup>
          <Box component='div' sx={{marginTop: 1}}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='id'
              label='ID'
              name='id'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' />}
              label='비밀번호 저장'
            />
            <Button
              type='button'
              fullWidth
              variant='contained'
              sx={{marginTop: 3, marginBottom: 2, backgroundColor: '#4199e1'}}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link>비밀번호 찾기</Link>
              </Grid>
              <Grid item>
                <Link>회원가입</Link>
              </Grid>
            </Grid>
            <img src='/titleLogo.svg' alt='titleLogoImg'></img>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
