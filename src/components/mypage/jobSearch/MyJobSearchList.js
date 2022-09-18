import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: '기업명', headerName: '기업명', width: 300},
  {field: '게시상태', headerName: '게시상태', width: 130}
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
  {id: 1, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 2, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 3, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 4, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 5, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 6, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 7, 기업명: '메타버스아카데미', 게시상태: 'N'},
  {id: 8, 기업명: '메타버스아카데미', 게시상태: 'Y'},
  {id: 9, 기업명: '메타버스아카데미', 게시상태: 'N'}
];

export default function MyJobSearchList() {
  return (
    <>
      <div style={{height: 400, width: 800}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
