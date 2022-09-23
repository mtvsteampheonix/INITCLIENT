import styled from 'styled-components';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/button';
import {Typography, Box, Grid} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
`;

const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
`;

const RecruitContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

function ApplyListArticle() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const applyList = [
    {
      companyCode: 1,
      name: '(주)손테크',
      companyCategory: '강소기업',
      recruitTitle: '데이터베이스',
      recruitConditionList: {
        condition1: '신입',
        condition2: '학력무관',
        condition3: '전남 나주시 외',
        condition4: '계약직'
      },
      applyDate: '2022.08.01',
      process: '진행중'
    },
    {
      companyCode: 2,
      name: '오픈마인드',
      companyCategory: '',
      recruitTitle: '프론트엔드 경력직 채용',
      recruitConditionList: {
        condition1: '경력',
        condition2: '초대졸',
        condition3: '경기 안산시 외',
        condition4: '정규직'
      },
      applyDate: '2022.07.01',
      process: '불합격'
    },
    {
      companyCode: 3,
      name: '인텔리안테크',
      companyCategory: '코스닥 강소기업',
      recruitTitle: '자바 웹 퍼블리싱',
      recruitConditionList: {
        condition1: '신입&경력',
        condition2: '초대졸',
        condition3: '경기 성남시 외',
        condition4: '정규직'
      },
      applyDate: '2022.06.01',
      process: '합격'
    }
  ];
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      {applyList.map((companyInfo) => (
        <>
          <Grid container paddingLeft={3} paddingTop={1.5}>
            <Grid item xs={0.5} paddingTop={1.5}>
              <Checkbox
                onClick={handleToggle(companyInfo.companyCode)}
                edge='start'
                checked={checked.indexOf(companyInfo.companyCode) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </Grid>
            <Grid item xs={1.4}>
              <Grid
                container
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
              >
                <Box paddingTop={1}>
                  <Typography variant='h6'>{companyInfo.name}</Typography>
                  <Typography fontSize='12px' textAlign='center'>
                    {companyInfo.companyCategory}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={7.7}>
              <Grid container flexDirection='column'>
                <Grid item>
                  <Typography variant='h4'>
                    {companyInfo.recruitTitle}
                  </Typography>
                </Grid>
                <Grid item>
                  {companyInfo.recruitConditionList.condition1}{' '}
                  {companyInfo.recruitConditionList.condition2}{' '}
                  {companyInfo.recruitConditionList.condition3}{' '}
                  {companyInfo.recruitConditionList.condition4}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} paddingTop={5}>
              {companyInfo.applyDate}
            </Grid>
            <Grid item xs={1.4} paddingTop={1.2} textAlign='center'>
              {companyInfo.process == '진행중' ? (
                <LoadingButton
                  loading={true}
                  loadingPosition='start'
                  startIcon={<SaveIcon />}
                  variant='outlined'
                >
                  진행중
                </LoadingButton>
              ) : companyInfo.process == '불합격' ? (
                <Button sx={{width: '100px'}} variant='outlined' color='error'>
                  불합격
                </Button>
              ) : (
                <Button sx={{width: '100px'}} variant='outlined'>
                  수락
                </Button>
              )}
            </Grid>
          </Grid>
        </>
      ))}
      <Stack spacing={2} sx={{alignItems: 'center'}}>
        <Typography>Page: {page}</Typography>
        <Pagination
          sx={{textAlign: 'center'}}
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}

export default ApplyListArticle;
