import {
  Grid,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Divider,
  ButtonGroup
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import {height} from '@mui/system';
import CustomAlert from '../../../components/commons/CustomAlert';
import {useState} from 'react';

function EditEntMemberInfo() {
  const entProfile = {
    entName: '섬송',
    tel: '010-1234-5678',
    email: 'test@example.com'
  };
  const verifiedNumber = '123456';
  const [isAlert, setIsAlert] = useState(false);
  return (
    <>
      <Box>
        <Typography variant='h4'>기업 회원 정보 조회/수정</Typography>
      </Box>
      <CustomAlert
        isAlert={isAlert}
        setIsAlert={setIsAlert}
        message='수정이 완료되었습니다.'
      />
      <Box padding={5}>
        <Grid container spacing={5} columnSpacing={1} marginBottom={10}>
          <Grid item xs={8}>
            <TextField fullWidth label='회사명' value={entProfile.entName} />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant='contained' sx={{height: '100%'}}>
              변경 활성화
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='전화번호' value={entProfile.tel} />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant='contained' sx={{height: '100%'}}>
              변경 활성화
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='이메일' value={entProfile.email} />
          </Grid>
          <Grid item xs={4}>
            <ButtonGroup fullWidth sx={{height: '100%'}}>
              <Button fullWidth variant='contained' sx={{height: '100%'}}>
                인증 번호 요청
              </Button>
              <Button fullWidth variant='contained' sx={{height: '100%'}}>
                변경 활성화
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='인증번호 확인' />
          </Grid>
          <Grid item xs={4}>
            <ButtonGroup fullWidth sx={{height: '100%'}}>
              <Button fullWidth variant='contained'>
                재 인증
              </Button>
              <Button fullWidth variant='contained'>
                인증 번호 확인
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>비밀 번호 변경</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='현재 비밀번호' />
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='변경할 비밀번호' />
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='변경할 비밀번호 재입력' />
          </Grid>
          <Grid item xs={4} display='flex' justifyContent='flex-end'>
            <Button fullWidth variant='contained' sx={{height: '100%'}}>
              변경
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant='contained'
              color='gray'
              sx={{height: '50px'}}
            >
              취소
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => setIsAlert(true)}
              fullWidth
              variant='contained'
              sx={{height: '50px'}}
            >
              확인
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default EditEntMemberInfo;
