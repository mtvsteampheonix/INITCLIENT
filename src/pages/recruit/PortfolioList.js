import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import styled from 'styled-components';

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  width: 980px;
`;
const Item = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  flex-direction: row;
  height: 200px;
  gap: 20px;
`;

const ItemInnerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
`;

function PortfolioList() {
  const lists = [
    {
      portfolioTitle: '고진감래',
      projectCode: 1,
      personalProjectCount: 1,
      teamProjectCount: 2
    },
    {
      portfolioTitle: '불사조',
      projectCode: 2,
      personalProjectCount: 5,
      teamProjectCount: 2
    },
    {
      portfolioTitle: '개미점프',
      projectCode: 3,
      personalProjectCount: 1,
      teamProjectCount: 2
    },
    {
      portfolioTitle: '꾸준히조',
      projectCode: 4,
      personalProjectCount: 4,
      teamProjectCount: 4
    }
  ];
  return (
    <>
      <Items>
        <FormControl>
          <RadioGroup name='portfolio'>
            {lists.map((item, index) => {
              return (
                <Item key={index}>
                  <FormControlLabel value={index} control={<Radio />} />
                  <ItemInnerText>
                    <Box style={{fontSize: '50px', textAlign: 'center'}}>
                      {item.portfolioTitle}
                    </Box>
                    <Box style={{textAlign: 'right'}}>
                      개인 프로젝트 : {item.personalProjectCount}개
                    </Box>
                    <Box style={{textAlign: 'right'}}>
                      팀 프로젝트 : {item.teamProjectCount}개
                    </Box>
                  </ItemInnerText>
                </Item>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Items>
    </>
  );
}

export default PortfolioList;
