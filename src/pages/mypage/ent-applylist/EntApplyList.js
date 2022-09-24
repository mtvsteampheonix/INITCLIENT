import styled from 'styled-components';
import Button from '@mui/material/button';
import {useNavigate} from 'react-router-dom';
import {
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ApplyPageHeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const applyList = [
  {
    applyCode: 1,
    name: '홍길동',
    resumeTitle: '신입도 사람이다',
    applyDate: '2022-08-10',
    duty: '자바개발자',
    resumeImage: '/bommi.jpg',
    result: '합격'
  },
  {
    applyCode: 2,
    name: '유관순',
    resumeTitle: '흐르는 강물과도 같지',
    applyDate: '2022-08-10',
    duty: '노드',
    resumeImage: '/bommi.jpg',
    result: '불합격'
  },
  {
    applyCode: 3,
    name: '이순신',
    resumeTitle: '나의 검은 당신의 것이오',
    applyDate: '2022-08-10',
    duty: '데이터베이스',
    resumeImage: '/bommi.jpg',
    result: '응답대기'
  }
];

function EntApplyList() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      {/* 헤더 부분 입니다. */}
      <ApplyPageHeaderComponent>
        <Title>공고 지원자 조회</Title>
        <FormGroup>
          <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>세부 검색</InputLabel>
              <Select
                style={{marginTop: '8px'}}
                size='small'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                //   value={age}
                label='process'
                //   onChange={handleChange}
              >
                <MenuItem value={'name'}>이름</MenuItem>
                <MenuItem value={'skill'}>기술스택</MenuItem>
                <MenuItem value={'duty'}>직무</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            multiline={true}
            id='outlined-helperText'
            label='검색'
            InputProps={{
              sx: {height: '40px', marginTop: '8px'}
            }}
          />
          <ButtonGroup>
            <Button
              style={{width: '130px', height: '40px', marginTop: '8px'}}
              variant='outlined'
            >
              검색
            </Button>
            <Button
              style={{width: '130px', height: '40px', marginTop: '8px'}}
              variant='outlined'
              color='error'
            >
              삭제
            </Button>
          </ButtonGroup>
        </FormGroup>
      </ApplyPageHeaderComponent>
      <Grid container borderBottom='1px solid black'>
        <Grid item xs={5}>
          <Typography fontSize='28px'>자바 웹 퍼블리싱</Typography>
        </Grid>
        <Grid item xs={4} textAlign='right'>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='신입'
          />
          <FormControlLabel control={<Checkbox />} label='경력 1년이상' />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label='경력 3년이상'
          />
        </Grid>
        <Grid item xs={3} textAlign='right'>
          <Button
            style={{
              width: '130px',
              height: '40px',
              marginRight: '20px'
            }}
            variant='outlined'
          >
            합격
          </Button>
          <Button
            style={{width: '130px', height: '40px'}}
            variant='outlined'
            color='error'
          >
            불합격
          </Button>
        </Grid>
      </Grid>
      {/* 바디 부분 입니다. */}
      {applyList.map((apply) => {
        return (
          <Grid container paddingLeft={3} paddingTop={1.5} height='55px'>
            <Grid item xs={0.5}>
              <Checkbox
                onClick={handleToggle(apply.applyCode)}
                edge='start'
                checked={checked.indexOf(apply.applyCode) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </Grid>
            <Grid
              item
              xs={6}
              onClick={() => {
                navigate('/mypage/ent/apply-list/details/' + apply.applyCode);
              }}
            >
              <Typography fontSize='26px'>{apply.resumeTitle}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography fontSize='20px' marginTop='5px'>
                {apply.duty}
              </Typography>
            </Grid>
            <Grid item xs={1} marginTop='9px'>
              <Typography fontSize='12px'>{apply.applyDate}</Typography>
            </Grid>
            <Grid item xs={1.5} textAlign='center'>
              {apply.result == '응답대기' ? (
                <LoadingButton
                  loading={true}
                  loadingPosition='start'
                  startIcon={<SaveIcon />}
                  variant='outlined'
                >
                  응답대기
                </LoadingButton>
              ) : apply.result == '불합격' ? (
                <Button sx={{width: '100px'}} variant='outlined' color='error'>
                  불합격
                </Button>
              ) : (
                <Button sx={{width: '100px'}} variant='outlined'>
                  합격
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
      <Stack spacing={2} sx={{alignItems: 'center'}}>
        <Typography>Page: {page}</Typography>
        <Pagination
          sx={{textAlign: 'center'}}
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}

export default EntApplyList;
