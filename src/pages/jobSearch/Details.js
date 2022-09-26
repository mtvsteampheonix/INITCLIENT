import {Container} from '@mui/system';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
function Details() {
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
        <Button variant='contained' href='/recruit/apply'>
          지원하기
        </Button>
        <Button variant='outlined'>목록</Button>
      </div>
    </Container>
  );
}

export default Details;
