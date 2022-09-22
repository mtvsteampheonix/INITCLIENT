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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

export default function RegistJobSearch() {
  /* datepicker */
  const [beginDay, setBeginDay] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeBegin = (newValue) => {
    setBeginDay(newValue);
  };
  const [endDay, setEndDay] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangeEnd = (newValue) => {
    setEndDay(newValue);
  };

  /*SELECT*/
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

  /*DIALOGALERT*/
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack spacing={1}>
        <h3>상세정보작성</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label='모집 게시일'
            value={beginDay}
            onChange={handleChangeBegin}
            renderInput={(params) => <TextField {...params} />}
          />

          <DateTimePicker
            label='모집 마감일'
            value={endDay}
            onChange={handleChangeEnd}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
          title='기술스택'
          list={skillList}
        ></MultipleSelectBox>
        <MultipleSelectBox title='직무' list={jobList}></MultipleSelectBox>

        <TextField
          fullWidth
          id='outlined-textarea'
          label='근무지 위치'
          placeholder='근무지의 주소를 입력해주세요'
          multiline
          minRows={1}
        />
        <TextField
          fullWidth
          id='outlined-textarea'
          label='복지사항'
          placeholder='복지사항을 입력해주세요.'
          multiline
          minRows={5}
          InputProps={{sx: {height: '150px'}}}
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
          placeholder='제목을 입력하세요.'
        />

        <TextField
          fullWidth
          id='outlined-textarea'
          label='내용'
          placeholder='기업소개글을 작성하세요.'
          multiline
          minRows={8}
          InputProps={{sx: {height: '200px'}}}
        />
        <Box style={{textAlign: 'center'}}>
          <Box>
            <Button variant='contained' size='large' onClick={handleClickOpen}>
              작성
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                {'구직공고작성'} {/*팝업창 메인에 출력할 문구*/}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                  새로운 구직공고게시글을 추가하시겠습니까?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant='contained' onClick={handleClose}>
                  예
                </Button>
                <Button variant='outlined' onClick={handleClose}>
                  아니요
                </Button>
              </DialogActions>
            </Dialog>
            <Button variant='outlined' size='large' href='jobsearch'>
              목록
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
