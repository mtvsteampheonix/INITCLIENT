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
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  flex-direction: row;
  width: 980px;
  height: 200px;
  gap: 20px;
`;

const ItemInnerText = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
`;

const ItemInnerImage = styled.div`
  width: 180px;
  height: 180px;
  background-size: contain;
  border: 1px solid black;
`;

function ResumeList() {
  const lists = [
    {
      title: '신입도 사람이다',
      date: '2022-09-16',
      userImage: '/bommi.jpg'
    },
    {
      title: '신입도 사람인가',
      date: '2022-09-16',
      userImage: '사진',
      userImage: '/bommi.jpg'
    },
    {
      title: '신입도 사람일꺼야',
      date: '2022-09-16',
      userImage: '사진',
      userImage: '/bommi.jpg'
    }
  ];
  return (
    <>
      <Items>
        <FormControl>
          <RadioGroup name='resume'>
            {lists.map((item, index) => {
              return (
                <Item key={index}>
                  <FormControlLabel value={index} control={<Radio />} />
                  <ItemInnerText>
                    <Box style={{fontSize: '50px', textAlign: 'center'}}>
                      {item.title}
                    </Box>
                    <Box style={{textAlign: 'right'}}>{item.date}</Box>
                  </ItemInnerText>
                  <ItemInnerImage
                    style={{
                      background: `url(${item.userImage})`,
                      backgroundSize: 'cover'
                    }}
                  ></ItemInnerImage>
                </Item>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Items>
    </>
  );
}

export default ResumeList;
