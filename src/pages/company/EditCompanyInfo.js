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
import {Typography} from '@mui/material';

function EditCompanyInfo() {
  return (
    <div>
      <h1> 하이루 베이비들// mypage/company화면이다 칭기야 ! </h1>

      <Box sx={{width: '100%', border: '1px solid'}}>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid xs={12}>
            <Box
              textAlign='center'
              fontSize={30}
              fontWeight={1000}
              sx={{height: '50px', lineHeight: '50px'}}
            >
              최 한 컴퍼니
            </Box>
            <hr></hr>
          </Grid>
          <Grid xs={12}>
            <Typography
              textAlign='center'
              sx={{height: '50px', lineHeight: '50px'}}
            >
              상세 내용
            </Typography>
            <hr></hr>
          </Grid>
          <Grid xs={2}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              대표자명
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              최 한
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              아이디
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              cohihan
            </Box>
          </Grid>
          <Grid xs={2}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              사업자등록번호
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider variant='middle' />
          </Grid>
          <Grid xs={4}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              홈페이지 주소
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              https://mtvs.kr/user/main
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider variant='middle' />
          </Grid>
          <Grid xs={4}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              인사 담당자 연락처
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box textAlign='center' sx={{height: '50px', lineHeight: '50px'}}>
              010-1234-1234
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider variant='middle' />
          </Grid>
          <Grid xs={4}>
            <Typography
              textAlign='center'
              sx={{height: '50px', lineHeight: '50px'}}
            >
              이메일
            </Typography>
          </Grid>
          <Grid xs={8}>
            <Typography
              textAlign='center'
              sx={{height: '50px', lineHeight: '50px'}}
            >
              mtvs@meta.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider variant='middle' />
          </Grid>
          <Grid xs={6} textAlign='center' marginTop={5} marginBottom={5}>
            <Button variant='contained'>수정하기</Button>
          </Grid>
          <Grid xs={6} textAlign='center' marginTop={5} marginBottom={5}>
            <Button variant='contained'>삭제요청</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default EditCompanyInfo;
