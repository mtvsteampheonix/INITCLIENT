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

export default function EditMemberInfo() {
  const profile = {
    name: '아무개',
    email: 'test@example.com'
  };
  const verifiedNumber = '123456';

  return (
    <>
      <Box padding={5}>
        <Grid container spacing={5} columnSpacing={1} marginBottom={10}>
          <Grid item xs={12}>
            <Typography variant='h4'>회원 정보 조회/수정</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='이름' value={profile.name} />
          </Grid>
          <Grid item xs={4}>
            <Button fullWidth variant='contained' sx={{height: '100%'}}>
              변경 활성화
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth label='이메일' value={profile.email} />
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
            <Button fullWidth variant='contained' sx={{height: '50px'}}>
              확인
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
