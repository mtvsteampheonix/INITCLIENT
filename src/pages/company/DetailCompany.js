import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function DetailCompany() {
  return (
    <div>
      <h1> 하이루 베이비들// detail화면이다 칭기야 ! </h1>
      {/* {' '}
      <h1> 하이루 베이비들22222222222 </h1>
      <br></br>
      <br></br>
      <Box sx={{border: '1px solid'}}>
        <h5>사진이 들어갈 곳</h5>
        <hr></hr>
        <p>회사명 메타버스 아카데미</p>
        <hr></hr>
        <p>기업 주소 경기도 성남시 수정구 시흥동 285-2</p>
        <hr></hr>
        <p>회사 홈페이지 https://mtvs.kr/user.main</p>
        <hr></hr>
        <p>사원수 200명</p>
        <hr></hr>
        <p>평균연봉 ~~만원</p>
        <hr></hr>
        <p> 기업 소개글 </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <Grid></Grid>

      <Box sx={{width: '100%', border: '1px solid'}}>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid xs={3}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              회사명
            </Box>
            <hr></hr>
          </Grid>
          <Grid xs={9}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              메타버스 아카데미
            </Box>
            <hr></hr>
          </Grid>
          <Grid xs={3}>
            <Item>기업 주소</Item>
          </Grid>
          <Grid xs={9}>
            <Item>경기도 성남시 수정구 시흥동 285-2</Item>
          </Grid>
          <Grid xs={3}>
            <Item>회사 홈페이지</Item>
          </Grid>
          <Grid xs={9}>
            <Item>https://mtvs.kr/user/main</Item>
          </Grid>
          <Grid xs={3}>
            <Item>사원수</Item>
          </Grid>
          <Grid xs={9}>
            <Item>200명</Item>
          </Grid>
          <Grid xs={3}>
            <Item>평균연봉</Item>
          </Grid>
          <Grid xs={9}>
            <Item>--만원</Item>
          </Grid>
          <Grid xs={12} textAlign='center' marginTop={5}>
            {/* 텍스트필드태그도 MUI라서 크기를 지정해도 반응형 가능함 반응형이 안되는건 기본 HTML 태그들.
             TEXTFILED의 크기를 100%로 주고 그 크기만큼 공간을 차지할 수 있도록 감싸는 Grid를 width 크기를 최대 크기(12)로 지정*/}
            <TextField
              id='outlined-multiline-static'
              //   sx={{
              //     width: 800,
              //     maxWidth: '100%',
              //     paddingTop: 5,
              //     margin: 'auto'
              //   }}
              label='기업소개글'
              multiline
              rows={15}
              defaultValue='Default Value'
              sx={{width: '80%'}}
            />
          </Grid>
          <Grid xs={12} textAlign='center' marginTop={5} marginBottom={5}>
            <Button variant='contained'>즉시 지원</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default DetailCompany;
