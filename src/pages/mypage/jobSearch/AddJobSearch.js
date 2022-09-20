import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MultipleSelectBox from '../../../components/mypage/jobSearch/MultipleSelectBox';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddJobSearch() {
  const [career, setCareer] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [employees, setEmployees] = React.useState('');
  const [education, setEducation] = React.useState('');

  const handleChangeCareer = (event) => {
    setCareer(event.target.value);
  };
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleChangeEmployees = (event) => {
    setEmployees(event.target.value);
  };
  const handleChangeEducation = (event) => {
    setEducation(event.target.value);
  };

  const skillList = ['java', 'python', 'C', 'spring', 'react', 'spring boot'];
  const jobList = [
    '자바개발자',
    '파이썬개발자',
    '리액트개발자',
    '백엔드',
    '프론트엔드'
  ];

  return (
    <>
      <Stack spacing={2} fullWidth>
        <h3>상세정보작성</h3>
        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>경력</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={career}
              label='career'
              onChange={handleChangeCareer}
            >
              <MenuItem value={'무관'}>무관</MenuItem>
              <MenuItem value={'신입'}>신입</MenuItem>
              <MenuItem value={'1년차'}>1년차</MenuItem>
              <MenuItem value={'2년차'}>2년차</MenuItem>
              <MenuItem value={'3년차'}>3년차</MenuItem>
              <MenuItem value={'4년차'}>4년차</MenuItem>
              <MenuItem value={'5년차'}>5년차</MenuItem>
              <MenuItem value={'6년차'}>6년차</MenuItem>
              <MenuItem value={'7년차'}>7년차</MenuItem>
              <MenuItem value={'8년차'}>8년차</MenuItem>
              <MenuItem value={'9년차'}>9년차</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>연봉</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={salary}
              label='salary'
              onChange={handleChangeSalary}
            >
              <MenuItem value={'3,000 이상'}>3,000 이상</MenuItem>
              <MenuItem value={'3,500 이상'}>3,500 이상</MenuItem>
              <MenuItem value={'4,000 이상'}>4,000 이상</MenuItem>
              <MenuItem value={'4,500 이상'}>4,500 이상</MenuItem>
              <MenuItem value={'5,000 이상'}>5,000 이상</MenuItem>
              <MenuItem value={'5,500 이상'}>5,500 이상</MenuItem>
              <MenuItem value={'6,000 이상'}>6,000 이상</MenuItem>
              <MenuItem value={'6,500 이상'}>6,500 이상</MenuItem>
              <MenuItem value={'7,000 이상'}>7,000 이상</MenuItem>
              <MenuItem value={'7,500 이상'}>7,500 이상</MenuItem>
              <MenuItem value={'8,000 이상'}>8,000 이상</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>직원수</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={employees}
              label='employees'
              onChange={handleChangeEmployees}
            >
              <MenuItem value={'5명이상'}>5명 이상</MenuItem>
              <MenuItem value={'20명이상'}>20명 이상</MenuItem>
              <MenuItem value={'50명이상'}>50명 이상</MenuItem>
              <MenuItem value={'100명이상'}>100명 이상</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{minWidth: 120}}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>학력</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={education}
              label='education'
              onChange={handleChangeEducation}
            >
              <MenuItem value={'무관'}>무관</MenuItem>
              <MenuItem value={'고졸'}>고졸</MenuItem>
              <MenuItem value={'대졸'}>대졸</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <MultipleSelectBox
          title='필요기술스택'
          list={skillList}
        ></MultipleSelectBox>
        <MultipleSelectBox title='직무' list={jobList}></MultipleSelectBox>

        <TextField
          fullWidth
          id='outlined-textarea'
          label='복지사항을 소개해주세요'
          placeholder='Placeholder'
          multiline
          minRows={8}
          InputProps={{sx: {height: '100px'}}}
        />
      </Stack>
      <Box>
        <h3 style={{margin: 10}}>소개글 작성</h3>
        <TextField
          fullWidth
          margin='dense'
          required
          id='title'
          label='제목'
          placeholder='제목을 입력하세요'
        />

        <TextField
          fullWidth
          id='outlined-textarea'
          label='내용'
          placeholder='Placeholder'
          multiline
          minRows={8}
          InputProps={{sx: {height: '200px'}}}
        />
        <Box style={{textAlign: 'center'}}>
          <Button variant='contained' size='large'>
            작성
          </Button>
          <Button variant='outlined' size='large'>
            목록
          </Button>
        </Box>
      </Box>
    </>
  );
}
