import * as React from 'react';
import Box from '@mui/material/Box';
import MyJobSearchList from '../../../components/mypage/jobSearch/MyJobSearchList';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import {Stack} from '@mui/system';
import {Typography} from '@mui/material';

export default function MyJobSearch() {
  /*게시 alert*/
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = () => {
    setOpenPost(false);
  };

  /*게시일 선택 date picker*/
  /* datepicker */
  const [PostbeginDay, setPostBeginDay] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangePostBegin = (newValue) => {
    setPostBeginDay(newValue);
  };
  const [PostendDay, setPostEndDay] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChangePostEnd = (newValue) => {
    setPostEndDay(newValue);
  };

  return (
    <Box>
      <Typography variant='h4'>MY구직공고</Typography>
      <MyJobSearchList />
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant='contained' size='large' href='regist-jobsearch'>
          작성
        </Button>
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={handleClickOpenPost}
        >
          게시
        </Button>
      </Box>

      {/* dialog 게시 */}

      <Dialog
        open={openPost}
        onClose={handleClosePost}
        aria-labelledby='alert-post-title'
        aria-describedby='alert-post-description'
      >
        <DialogTitle id='alert-post-title'>{'My구직공고 게시'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-post-description'>
            <Box>
              잔여시간 :{/*  게시일 선택 */}
              <Box margin={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label='모집 게시일'
                    value={PostbeginDay}
                    onChange={handleChangePostBegin}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DateTimePicker
                    label='모집 마감일'
                    value={PostendDay}
                    onChange={handleChangePostEnd}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              필요시간 :
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClosePost} size='large'>
            게시
          </Button>
          <Button variant='outlined' onClick={handleClosePost} size='large'>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
