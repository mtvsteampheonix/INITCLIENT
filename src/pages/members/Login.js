import {
  Avatar,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Box,
  Stack
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {CallPostLoginAPI} from '../../apis/LoginAPICalls';
import {useState} from 'react';

function Login() {
  const [loginData, setLoginData] = useState({id: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  const handleOnclickLogin = (e) => {
    dispatch(CallPostLoginAPI(loginData)).then((res) => {
      return res.payload.kind != 0 ? navigate('/') : alert('실패');
    });
  };

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        alignContent='center'
        flexDirection='column'
        marginTop={10}
        maxWidth={800}
        marginLeft='auto'
        marginRight='auto'
      >
        <Stack rowGap={1}>
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

          <TextField
            margin='normal'
            required
            fullWidth
            id='id'
            label='ID'
            name='id'
            autoFocus
            onChange={handleChange}
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
            onChange={handleChange}
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
            onClick={handleOnclickLogin}
          >
            로그인
          </Button>
          <Box display='flex' justifyContent='space-between'>
            <Link to='../reset-password'>비밀번호 재설정</Link>
            <Link to='../regist/agree-terms'>회원가입</Link>
          </Box>
          <img src='/titleLogo.svg' alt='titleLogoImg'></img>
        </Stack>
      </Box>
    </>
  );
}

export default Login;
