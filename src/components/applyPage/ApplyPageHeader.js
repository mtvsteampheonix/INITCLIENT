import styled from 'styled-components';
import Button from '@mui/material/button';
import {useNavigate} from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <>
      <ApplyPageHeaderComponent>
        <Title>지원서 작성</Title>
        <ButtonGroup>
          <Button
            href='/jobsearch'
            style={{width: '130px', height: '40px'}}
            variant='outlined'
          >
            목록
          </Button>
          <Button
            onClick={() => {
              const checkResume = window.confirm('작성을 완료하시겠습니까?');
              if (checkResume) {
                alert('작성 완료 되었습니다');
                navigate('/jobsearch');
              } else {
                return;
              }
            }}
            style={{width: '130px', height: '40px'}}
            variant='outlined'
          >
            작성완료
          </Button>
        </ButtonGroup>
      </ApplyPageHeaderComponent>
    </>
  );
}

export default ApplyPageHeader;
