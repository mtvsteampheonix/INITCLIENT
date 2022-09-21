import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom';
// import PaginationControlled from '../../components/company/PaginationControlled';
import PaginationControlled from '../../components/company/PaginationControlled';

function createData(No, comName, title, interest) {
  return {No, comName, title, interest};
}

const rows = [
  createData(1, '2022.08.11   ', '대기중'),
  createData(2, '2022.08.10   ', '반려'),
  createData(3, '2022.08.01   ', '승인'),
  createData(4, '2022.07.01   ', '취소')
];

export default function EdlitListCompanyInfo() {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate('./details');
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>요청날짜</TableCell>
            {/* <TableCell>구직공고명</TableCell> */}
            <TableCell>상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.No}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component='th' scope='row'>
                {row.No}
              </TableCell>
              <TableCell>{row.comName}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                {/* <Button variant='contained' onClick={toDetails}>
                  지원하기
                </Button> */}
                {/* <IconButton color='primary'>
                  {row.interest == 'N' ? <StarBorderIcon /> : <StarIcon />}
                </IconButton> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Container maxWidth='sm'>
        <PaginationControlled />
      </Container>
    </TableContainer>
  );
}
