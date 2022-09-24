import {
  Divider,
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {styled} from '@mui/system';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {callGetSignupplzListAPI} from '../../../../apis/AdminMemberAPICalls';

const StyledGridItem = styled(Grid)({
  display: 'flex'
});
const StyledDivider = styled(Divider)(({theme}) => ({
  borderColor: theme.palette.primary.main
}));
function DetailCard({category, children, islink}) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography>{category}</Typography>
      </Grid>
      <Divider flexItem orientation='vertical' variant='middle'></Divider>
      <Grid item xs={6}>
        {islink ? (
          <Typography
            marginLeft={2}
            component='a'
            href={children}
            target='_blank'
            sx={{textDecorationLine: 'none'}}
          >
            {children}
          </Typography>
        ) : (
          <Typography marginLeft={2}>{children}</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default function SignupplzDetails() {
  const {singupNum} = useParams();
  const [isAcceptance, SetIsAcceptance] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const rows = useSelector((state) => state.singupplzReducer);
  const details = rows.filter((row) => row.singupNum == singupNum)[0];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleConfirmOpen = () => {
    setConfirmOpen(!confirmOpen);
  };
  useEffect(() => {
    dispatch(callGetSignupplzListAPI());
  }, []);
  return (
    <>
      <Box maxWidth='800px' marginLeft='auto' marginRight='auto' marginTop={5}>
        <Stack spacing={5}>
          <Typography align='center' variant='h4'>
            기업 회원 가입 요청
          </Typography>
          <StyledDivider
            variant='fullWidth'
            textAlign='center'
            sx={{borderBottomWidth: 4}}
          />
          <Typography align='center' variant='h5'>
            상세 내용
          </Typography>
          <StyledDivider
            variant='fullWidth'
            textAlign='center'
            sx={{borderBottomWidth: 2}}
          />
          <Grid container padding={3} gap={1}>
            <StyledGridItem item xs={12}>
              <DetailCard category='아이디'>{details.id}</DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='이름'>{details.name}</DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='연락처'>{details.phone}</DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='이메일'>{details.email}</DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='대표자 명'>{details.ceoName}</DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='사업자 등록 번호'>
                {details.registNumber}
              </DetailCard>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
              <DetailCard category='홈페이지 주소' islink='true'>
                {details.siteUrl}
              </DetailCard>
            </StyledGridItem>
            <StyledDivider
              variant='fullWidth'
              textAlign='center'
              sx={{borderBottomWidth: 2}}
            />
          </Grid>
          <StyledDivider
            variant='fullWidth'
            textAlign='center'
            sx={{borderBottomWidth: 2}}
          />
        </Stack>
        <Stack direction='row' spacing={5} marginTop={15}>
          <Button
            onClick={() => {
              SetIsAcceptance(false);
              setConfirmOpen(true);
            }}
            fullWidth
            variant='contained'
            color='gray'
          >
            거절
          </Button>
          <Button
            onClick={() => {
              SetIsAcceptance(true);
              setConfirmOpen(true);
            }}
            fullWidth
            variant='contained'
          >
            승인
          </Button>
        </Stack>
      </Box>
      <Dialog
        open={confirmOpen}
        onClose={toggleConfirmOpen}
        aria-labelledby='confirm-title'
        aria-describedby='confirm-description'
      >
        <DialogTitle id='confirm-title'>
          {isAcceptance ? '정말 승인하시겠습니까?' : '정말 거절하시겠습니까?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='confirm-description'>
            다시 번복할 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setConfirmOpen(false);
            }}
            variant='contained'
          >
            거절
          </Button>
          <Button
            onClick={() => {
              setConfirmOpen(false);
              navigate('../');
            }}
            variant='contained'
            autoFocus
          >
            승인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
