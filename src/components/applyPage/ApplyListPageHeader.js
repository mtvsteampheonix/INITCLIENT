import styled from 'styled-components';
import Button from '@mui/material/button';
import {TextField} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ApplyPageHeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 280px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

function ApplyPageHeader() {
  //   const [age, setAge] = React.useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  return (
    <>
      <ApplyPageHeaderComponent>
        <Title>지원 내역</Title>
        <FormGroup>
          <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>처리상황</InputLabel>
              <Select
                style={{marginTop: '8px'}}
                size='small'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                //   value={age}
                label='process'
                //   onChange={handleChange}
              >
                <MenuItem value={'진행중'}>진행중</MenuItem>
                <MenuItem value={'합격'}>합격</MenuItem>
                <MenuItem value={'불합격'}>불합격</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            multiline={true}
            id='outlined-helperText'
            label='검색'
            InputProps={{
              sx: {height: '40px', marginTop: '8px'}
            }}
          />
          <ButtonGroup>
            <Button
              style={{width: '130px', height: '40px', marginTop: '8px'}}
              variant='outlined'
            >
              검색
            </Button>
            <Button
              style={{width: '130px', height: '40px', marginTop: '8px'}}
              variant='outlined'
            >
              삭제
            </Button>
          </ButtonGroup>
        </FormGroup>
      </ApplyPageHeaderComponent>
    </>
  );
}

export default ApplyPageHeader;
