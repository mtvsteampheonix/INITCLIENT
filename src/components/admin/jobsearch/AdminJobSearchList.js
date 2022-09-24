import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Box} from '@mui/system';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

const columns = [
  {field: 'id', headerName: 'ID', width: 100},
  {field: '기업명', headerName: '기업명', width: 200},
  {field: '공고제목', headerName: '공고 제목', width: 300},
  {field: '게시기간', headerName: '게시 기간', width: 300},
  {field: '게시상태', headerName: '게시 상태', width: 130}

  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 90,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
];

const rows = [
  {
    id: 1,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 2,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 3,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 4,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 5,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 6,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 7,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 8,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 9,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 10,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 11,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 12,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 13,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 14,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 15,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  },
  {
    id: 16,
    기업명: '메타버스아카데미',
    공고제목: '공고제목입니다.',
    게시기간: '[ ] ~ [ ]',
    게시상태: "'Y' or 'N'"
  }
];

export default function AdminJobSearchList() {
  const navigate = useNavigate();

  /* datagrid param관련설정*/
  const getRowId = (params) => {
    console.log('클릭된 row의 id는' + params.id); //row클릭스 id를 반환
    navigate(`details/${params.id}`);
  };

  const [selectionModel, setSelectionModel] = useState([]); //selectedbox가 체크된 row의 id를 저장하는 state

  useEffect(() => {
    setSelectionModel([1, 3, 5]); //selectBox 초기값 설정 1,3,5를 넣어줬기 때문에 초기에 id가 1,3,5인 row가 선택되어있는것
  }, []);

  console.log('선택된 row의 id는' + selectionModel); //선택된 row의 id를 확인할 수 있음 -> Reducer생성해서 관리할 것.

  return (
    <>
      <Box style={{width: '100%'}}>
        <DataGrid
          onRowClick={getRowId} //row클릭시 이벤트발생시키는 prop
          rows={rows}
          columns={columns}
          autoHeight={true}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection // 체크박스가 필요한 경우에 사용할것.
          disableSelectionOnClick
          onSelectionModelChange={async (newSelection) => {
            setSelectionModel(newSelection);
          }}
          selectionModel={selectionModel}
        />
      </Box>
    </>
  );
}
