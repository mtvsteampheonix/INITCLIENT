import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {GET_TOKEN_DATA} from '../../modules/auth/tokenTempModule';

export default function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant='contained'
        onClick={() =>
          dispatch({
            type: GET_TOKEN_DATA,
            payload: {name: '비회원', kind: '0'}
          })
        }
        sx={{marginLeft: 1}}
      >
        로그아웃
      </Button>
    </>
  );
}
