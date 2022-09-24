import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const columnHeaderlist = [
  {id: 'id', align: 'center', label: '아이디', minWidth: 100},
  {id: 'name', align: 'center', label: '이름', minWidth: 100},
  {id: 'companyName', align: 'center', label: '회사명', minWidth: 100},
  {id: 'signupDate', align: 'center', label: '가입일자', minWidth: 100},
  {id: 'ceoName', align: 'center', label: '대표자 명', minWidth: 100},
  {id: 'email', align: 'center', label: '이메일', minWidth: 200},
  {id: 'seeDetail', align: 'center', label: '상세조회', minWidth: 200}
];
const rows = [
  {
    singupNum: 1,
    id: 'test01',
    name: '정형둔',
    companyName: '무한상사',
    signupDate: '2022/08/30',
    ceoName: '유재속',
    email: 'helpme@example.com'
  },
  {
    singupNum: 2,
    id: 'test02',
    name: '손창우',
    companyName: '불사조',
    signupDate: '2022/09/02',
    ceoName: '김승우',
    email: 'phoenix@example.com'
  },
  {
    singupNum: 3,
    id: 'test03',
    name: '테스트유저1',
    companyName: '불사조',
    signupDate: '2022/09/02',
    ceoName: '김승우',
    email: 'phoenix@example.com'
  },
  {
    singupNum: 4,
    id: 'test04',
    name: '테스트유저2',
    companyName: '불수조',
    signupDate: '2022/09/02',
    ceoName: '김상유',
    email: 'fireBool@example.com'
  },
  {
    singupNum: 5,
    id: 'test05',
    name: '이구역',
    companyName: '불일조',
    signupDate: '2022/09/02',
    ceoName: '박승혁',
    email: 'fireOne@example.com'
  },
  {
    singupNum: 6,
    id: 'test06',
    name: '테스터',
    companyName: '쿠글',
    signupDate: '2022/09/02',
    ceoName: '인자강',
    email: 'Koogle@example.com'
  },
  {
    singupNum: 7,
    id: 'test07',
    name: '김자국',
    companyName: '메타',
    signupDate: '2022/09/02',
    ceoName: 'John',
    email: 'moonie@example.com'
  },
  {
    singupNum: 8,
    id: 'test08',
    name: '김국자',
    companyName: '메타푸드',
    signupDate: '2022/09/02',
    ceoName: '백죵원',
    email: 'metafood@example.com'
  },
  {
    singupNum: 9,
    id: 'tkffuwntpdy',
    name: '비와이',
    companyName: '쇼미더머니',
    signupDate: '2022/09/02',
    ceoName: '김진푝',
    email: 'by@example.com'
  }
];

const StyledTableHeader = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}));

export default function Signupplz() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Typography variant='h4'>기업회원 가입 승인요청 목록</Typography>
      <Paper
        sx={{
          marginTop: 5,
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <TableContainer sx={{maxHeight: 500}}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columnHeaderlist.map((column) => (
                  <StyledTableHeader
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth
                    }}
                  >
                    {column.label}
                  </StyledTableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.singupNum}
                    >
                      {columnHeaderlist.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'seeDetail' ? (
                              <Button
                                component={Link}
                                to={`${row.singupNum}`}
                                variant='contained'
                              >
                                상세조회
                              </Button>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage='한페이지 리스트 개수'
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>
    </>
  );
}
