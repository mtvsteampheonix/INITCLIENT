import styled from 'styled-components';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Button from '@mui/material/button';
import {Typography, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
      <List
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {applyList.map((apply, index) => {
          const labelId = `checkbox-list-label-${apply.companyCode}`;

          return (
            <Item key={apply.companyCode}>
              <ListItem disablePadding>
                <ListItemButton
                  role={undefined}
                  dense
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Checkbox
                      onClick={handleToggle(apply.companyCode)}
                      edge='start'
                      checked={checked.indexOf(apply.companyCode) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': labelId
                      }}
                    />
                    <CompanyName>
                      <Typography variant='h6'>{apply.name}</Typography>
                      <Typography sx={{fontSize: '12px'}}>
                        {apply.companyCategory}
                      </Typography>
                    </CompanyName>
                    <RecruitContent>
                      <Typography variant='h4'>{apply.recruitTitle}</Typography>
                      <Typography>
                        {apply.recruitConditionList.condition1}{' '}
                        {apply.recruitConditionList.condition2}{' '}
                        {apply.recruitConditionList.condition3}{' '}
                        {apply.recruitConditionList.condition4}
                        <Typography sx={{float: 'right'}}>
                          {apply.applyDate}
                        </Typography>
                      </Typography>
                    </RecruitContent>
                  </Box>
                  {apply.process == '합격' ? (
                    <Button sx={{width: '100px'}} variant='outlined'>
                      합격
                    </Button>
                  ) : apply.process == '불합격' ? (
                    <Button
                      sx={{width: '100px'}}
                      variant='outlined'
                      color='error'
                    >
                      불합격
                    </Button>
                  ) : (
                    <LoadingButton
                      loading
                      loadingPosition='start'
                      startIcon={<SaveIcon />}
                      variant='outlined'
                    >
                      진행중
                    </LoadingButton>
                  )}
                </ListItemButton>
              </ListItem>
            </Item>
          );
        })}
        <Stack spacing={2} sx={{alignItems: 'center'}}>
          <Typography>Page: {page}</Typography>
          <Pagination
            sx={{textAlign: 'center'}}
            count={10}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </List>
    </>
  );
}

export default ApplyListArticle;
