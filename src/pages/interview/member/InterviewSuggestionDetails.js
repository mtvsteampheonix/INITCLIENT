import Button from '@mui/material/button';
import {TextField, Grid, Typography, Paper} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useNavigate, useParams} from 'react-router-dom';

function InterviewSuggestionDetails() {
  const {companyCode} = useParams();
  const navigate = useNavigate();
  const suggestionInfo = {
    companyName: '인텔리안테크',
    companyAddress: '경기도 성남시 수정구 시흥동 285-2 103호',
    companyURL: 'https://mtvs.kr/user/main',
    companyEmp: 200,
    SuggestionDate: ['1일', '2일', '3일'],
    description: '자네는 훌륭한 친구야. 꼭 내가 데려가고 싶네. 허 허 허 허',
    companyImage: '/companyImage.jpg'
  };
  return (
    <>
      <Grid container textAlign='center'>
        <Grid item xs={12} textAlign='center'>
          <img src={suggestionInfo.companyImage} width='300px' />
        </Grid>
        <Grid
          item
          xs={12}
          borderBottom='1px solid #D5D5D5'
          marginBottom='20px'
        />
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사명</Typography>
        </Grid>
        <Grid item xs={10} marginBottom='20px'>
          <Typography fontSize='30px'>{suggestionInfo.companyName}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>기업주소</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyAddress}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>회사홈페이지</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyURL}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>사원수</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography fontSize='30px' marginBottom='20px'>
            {suggestionInfo.companyEmp}명
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize='30px'>면접일자선택</Typography>
        </Grid>
        <Grid
          item
          xs={10}
          marginBottom='40px'
          display='flex'
          justifyContent='right'
          alignItems='right'
        >
          <FormControl
            sx={{m: 0.3, minWidth: 120, width: '200px'}}
            size='small'
          >
            <InputLabel id='demo-select-small'>날짜 선택</InputLabel>
            <Select
              labelId='demo-select-small'
              id='demo-select-small'
              label='Age'
            >
              {suggestionInfo.SuggestionDate.map((date) => (
                <MenuItem value={date}>{date}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} marginBottom='20px'>
          <Paper elevation={3}>
            <TextField
              multiline
              minRows={30}
              value={suggestionInfo.description}
              fullWidth
            ></TextField>
          </Paper>
        </Grid>
        <Grid item xs={12} align='right' marginBottom='30px'>
          <Box>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px'
              }}
              variant='outlined'
              onClick={() => navigate('/mypage/suggestion-list')}
            >
              목록
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
            >
              승인
            </Button>
            <Button
              style={{
                width: '130px',
                height: '40px',
                marginTop: '8px',
                marginLeft: '20px'
              }}
              variant='outlined'
              color='error'
            >
              거절
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default InterviewSuggestionDetails;
