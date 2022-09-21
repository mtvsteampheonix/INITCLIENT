import styled from 'styled-components';
import Button from '@mui/material/button';

const ApplyPageHeaderComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Title = styled.span`
  font-size: 32px;
`;

function ApplyPageHeader() {
  return (
    <>
      <ApplyPageHeaderComponent>
        <Title>지원서 작성</Title>
        <ButtonGroup>
          <Button style={{width: '130px', height: '40px'}} variant='outlined'>
            목록
          </Button>
          <Button style={{width: '130px', height: '40px'}} variant='outlined'>
            이전
          </Button>
          <Button style={{width: '130px', height: '40px'}} variant='outlined'>
            다음
          </Button>
          <Button style={{width: '130px', height: '40px'}} variant='outlined'>
            작성완료
          </Button>
        </ButtonGroup>
      </ApplyPageHeaderComponent>
    </>
  );
}

export default ApplyPageHeader;
