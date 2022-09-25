import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const HeaderText = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 48px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const createData = (resumeNo, title, date, name, email) => {
  return {resumeNo, title, date, name, email};
};

const rows = [
  createData(
    1,
    '호이애 최고의 이력서',
    '2022-09-25',
    '최재혁',
    'hoiae@mtvs.com'
  ),
  createData(
    2,
    '호이애 호이애~ 이력서',
    '2022-09-23',
    '최재혁',
    'hoiae@mtvs.com'
  ),
  createData(
    3,
    '호이애 나는 최고다 이력서',
    '2022-09-21',
    '최재혁',
    'hoiae@mtvs.com'
  ),
  createData(
    4,
    '호이애, 아마존 가다',
    '2022-09-12',
    '최재혁',
    'hoiae@mtvs.com'
  ),
  createData(
    5,
    '호이애, 유니콘 기업 만들다',
    '2022-09-03',
    '최재혁',
    'hoiae@mtvs.com'
  )
];

function AdminResumeLists() {
  const navigate = useNavigate();

  const PaginationController = ({currPage}) => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
      <Stack spacing={2}>
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          color='primary'
        />
      </Stack>
    );
  };

  return (
    <>
      <HeaderText>이력서 조회</HeaderText>
      <form
        id='searchForm'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          marginBottom: '10px'
        }}
      >
        <Select
          sx={{minWidth: 100}}
          size='small'
          id='selectCriteria'
          style={{marginRight: '10px'}}
          defaultValue='title'
        >
          <MenuItem value='title'>제목</MenuItem>
          <MenuItem value='date'>작성일자</MenuItem>
          <MenuItem value='name'>성명</MenuItem>
          <MenuItem value='email'>이메일</MenuItem>
        </Select>

        <Box
          component='form'
          sx={{
            '& > :not(style)': {m: 1, width: '35ch'}
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='검색어 입력'
            variant='outlined'
            size='small'
            type='text'
            defaultValue=''
          ></TextField>
        </Box>
        <SearchIcon
          onClick={() => {
            document.getElementById('searchForm').submit();
          }}
        ></SearchIcon>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>이력서 제목</TableCell>
              <TableCell>작성일자</TableCell>
              <TableCell>성명</TableCell>
              <TableCell>이메일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                onClick={() => {
                  navigate('/admin/resume/detail/' + (parseInt(index) + 1));
                }}
                key={row.No}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component='th' scope='row'>
                  {row.resumeNo}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div
          maxWidth='sm'
          style={{
            minHeight: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <PaginationController />
        </div>
      </TableContainer>
    </>
  );
}

export default AdminResumeLists;
