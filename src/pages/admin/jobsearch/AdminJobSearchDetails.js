import * as React from 'react';
import {Container} from '@mui/system';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function AdminJobSearchDetails() {
  /*마감 alert*/
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = () => {
    setOpenPost(false);
  };
  return (
    <Container fixed>
      <h1>기업명</h1>
      <hr />
      <h2>구직 공고 명</h2>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Item>
              <div>지원자격</div>
              <ul>
                <li>경력: </li>
                <li>학력: </li>
                <li>우대: </li>
              </ul>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div>근무조건</div>
              <ul>
                <li>고용형태: </li>
                <li>급여: </li>
                <li>지역: </li>
              </ul>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <div>기업정보</div>
              <ul>
                <li>업종: </li>
                <li>사원수: </li>
                <li>홈페이지: </li>
              </ul>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <hr />
      <div
        style={{
          witdh: 1200,
          height: 300,
          backgroundColor: 'primary'
        }}
      >
        <h3>기업소개글</h3>
      </div>
      <div style={{textAlign: 'center', margin: 10}}>
        <Button variant='contained' size='large' onClick={handleClickOpenPost}>
          마감
        </Button>
        <Button variant='outlined' size='large' href='/admin/jobsearch'>
          목록
        </Button>
      </div>

      {/* dialog 마감 */}
      <Dialog
        open={openPost}
        onClose={handleClosePost}
        aria-labelledby='alert-post-title'
        aria-describedby='alert-post-description'
      >
        <DialogTitle id='alert-post-title'>{'전체 구직 공고 조회'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-post-description'>
            선택한 구직공고를 정말 마감시키겠습니까?.
            <br />
            (남은 기간 만큼 잔여시간에 추가됩니다.)
            <br />
            <label>강제 마감 사유 입력 :</label>
            <input type='text' id='unpostingReason' size={50} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClosePost} size='large'>
            예
          </Button>
          <Button variant='outlined' onClick={handleClosePost} size='large'>
            아니요
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
