import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {GET_TOKEN_DATA} from '../../modules/auth/tokenTempModule';
import {useNavigate} from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate(0);
  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          dispatch({
            type: GET_TOKEN_DATA,
            payload: {name: '비회원', kind: '0'}
          });
          navigate('/');
        }}
        sx={{marginLeft: 1}}
      >
        로그아웃
      </Button>
    </>
  );
}
