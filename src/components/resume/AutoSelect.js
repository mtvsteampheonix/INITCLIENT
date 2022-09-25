import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const TitleText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
`;

export default function AutoSelect({title, list}) {
  return (
    <MainContainer>
      <TitleText>{title}</TitleText>
      <Stack spacing={3} width={1200}>
        <Autocomplete
          multiple
          id='multipls-select'
          options={list}
          getOptionLabel={(option) => option}
          // defaultValue={[list[13]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label={title} placeholder={title} />
          )}
        />
      </Stack>
    </MainContainer>
  );
}
