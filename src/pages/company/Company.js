import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

function Company() {
  const [age1, setAge1] = React.useState('');
  const [age2, setAge2] = React.useState('');
  const [age3, setAge3] = React.useState('');
  const [isBookmark, setIsBookmark] = React.useState(false);
  const handleChangeBookmark = (e) => {
    setIsBookmark(!isBookmark);
  };
  //위 3개 콘스트는 셀렉트박스 3개 다르게 움직이기 위함 임다

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  //위 3개 콘스트는 값 저장 하는데 쓰는거 결국 셀렉트 박스 임다

  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));
  //이 콘스트는 네모난 박스 형식 grid 만드는거 입니다. 네모난거 6개 있는거 그거 ㅇ오른ㅉ쪽 위에 별표시 있는거 바로 그 것!

  return (
    <div>
      {' '}
      {/* <h1> 하이루 베이비들 // 컴퍼니 기본화면임다 </h1> */}
      {/* 위 내용은 사기충전을 위함 입니다. */}
      <Paper
        component='form'
        sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
      >
        {/* <IconButton sx={{p: '10px'}} aria-label='menu'>
          <MenuIcon />
        </IconButton> */}
        <InputBase
          sx={{ml: 1, flex: 1}}
          placeholder='구글맵 서치 아닙니다. 오해하지 마십쇼'
          inputProps={{'aria-label': 'search google maps'}}
        />
        <IconButton type='button' sx={{p: '10px'}} aria-label='search'>
          <SearchIcon />
        </IconButton>
        <Divider sx={{height: 28, m: 0.5}} orientation='vertical' />
        {/* <IconButton color='primary' sx={{p: '10px'}} aria-label='directions'>
          <DirectionsIcon />
        </IconButton> */}
        {/* 구글맵 우회전 표시 */}
      </Paper>
      <br></br>
      <Box sx={{minWidth: 120, display: 'flex'}}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>연봉</InputLabel>
          <Select
            labelId='demo-simple-select-label1'
            id='demo-simple-select1'
            value={age1}
            label='Age'
            onChange={handleChange1}
          >
            <MenuItem value={10}>2천 ~ 4천</MenuItem>
            <MenuItem value={20}>4천 ~ 6천</MenuItem>
            <MenuItem value={30}>6천 이상</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>직원수</InputLabel>
          <Select
            labelId='demo-simple-select-label2'
            id='demo-simple-select2'
            value={age2}
            label='Age'
            onChange={handleChange2}
          >
            <MenuItem value={10}>1인 신조</MenuItem>
            <MenuItem value={20}>100명 미만</MenuItem>
            <MenuItem value={30}>100명 이상</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>지역</InputLabel>
          <Select
            labelId='demo-simple-select-label3'
            id='demo-simple-select3'
            value={age3}
            label='Age'
            onChange={handleChange3}
          >
            <MenuItem value={10}>서울</MenuItem>
            <MenuItem value={20}>부산</MenuItem>
            <MenuItem value={30}>제주도</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{width: '100%'}}>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
          <Grid xs={6}>
            <Item>
              손창우씨 짐좀 내려놔 멋 짐
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              재혁이형 요즘 굴이 재철이라는데? 얼굴
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              재원이형에겐 벽이 느껴저 완
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              주싱이 넌 왜 맨날 같은 티만 입냐 프리티
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              그쪽은 사슴이네요 내 맘을 녹용
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              네 미모는 비행기 같네, 타고 남
              <IconButton color='primary' onClick={handleChangeBookmark}>
                {isBookmark ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Company;
