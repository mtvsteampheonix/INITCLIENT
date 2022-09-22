import {Grid, Typography, TextField, Stack, Button} from '@mui/material';

export default function ResetPassword() {
  return (
    <>
      <Grid
        container
        rowGap={5}
        paddingTop={5}
        paddingBottom={5}
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            비밀번호 재설정
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>
            비밀번호를 재설정 할 이메일을 입력해 주세요.
          </Typography>
          <Typography align='center'>
            입력된 메일로 자세한 안내를 보내드립니다.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} marginTop={5}>
          <Stack spacing={1}>
            <Typography align='left' fontWeight='bold'>
              비밀번호를 재설정 할 이메일{' '}
              <Typography component='span' color='red'>
                *
              </Typography>
            </Typography>
            <TextField
              type='email'
              sx={{width: '100%'}}
              placeholder='이메일을 입력해주세요'
            />
          </Stack>
        </Grid>
        <Grid xs={0} md={12} />
        <Grid xs={12} md={6} marginTop={10}>
          <Button fullWidth variant='contained'>
            비밀번호 재설정 이메일 보내기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
