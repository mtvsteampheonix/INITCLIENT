import {
  Avatar,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Grid
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Box} from '@mui/system';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Avatar sx={{m: 1}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          sign in
        </Typography>
      </Box>

      <ButtonGroup
        variant='contained'
        aria-label='selectedMemberType'
        fullWidth
        sx={{marginTop: 8}}
        color='gray'
      >
        <Button>개인회원</Button>
        <Button>기업회원</Button>
      </ButtonGroup>
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
        color='primary'
        sx={{marginTop: 3, marginBottom: 2}}
      >
        로그인
      </Button>
      <Box display='flex' justifyContent='space-between'>
        <Link to='../reset-password'>비밀번호 재설정</Link>
        <Link to='../regist/agree-terms'>회원가입</Link>
      </Box>
      <img src='/titleLogo.svg' alt='titleLogoImg'></img>
    </>
  );
}

export default Login;
