import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Typography} from '@mui/material';
import AdminJobSearchList from '../../../components/admin/jobsearch/AdminJobSearchList';

export default function AdminJobSearch() {
  /*마감 alert*/
  const [openPost, setOpenPost] = React.useState(false);

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const handleClosePost = () => {
    setOpenPost(false);
  };

  return (
    <Box>
      <Typography variant='h4'>전체 구직 공고 조회</Typography>
      <AdminJobSearchList />
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant='contained' size='large' onClick={handleClickOpenPost}>
          마감
        </Button>
      </Box>

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
    </Box>
  );
}
