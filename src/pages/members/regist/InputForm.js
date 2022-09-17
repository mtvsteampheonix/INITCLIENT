import {Typography, Grid, Box, Stack, TextField} from '@mui/material';
function InputForm() {
  return (
    <article>
      <Typography variant='h4' align='center'>
        개인 회원 가입
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img style={{width: '300px'}} src='/titleLogo.svg' alt='titleLogo' />
      </Box>
      <Stack
        justifyContent='center'
        spacing={1}
        minWidth={800}
        margin='auto'
        paddingBottom={10}
        width={1200}
        alignContent='center'
      >
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
      </Stack>
    </article>
  );
}

export default InputForm;
