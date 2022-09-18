import ApplyPageHeader from '../../components/applyPage/ApplyPageHeader';
import styled from 'styled-components';
import ApplyPageNavbar from '../../components/applyPage/ApplyPageNavbar';
import ResumeList from './ResumeList';
import {useSelector} from 'react-redux';
import applyPageListStatsReducer from '../../modules/applyPageModule';
import {Typography} from '@mui/material';
import PortfolioList from './PortfolioList';

const ApplyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;
const ApplyArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  height: 1200px;
  padding-top: 12px;
  gap: 20px;
`;
function Apply() {
  const listStatsNumber = useSelector(
    (state) => state.applyPageListStatsReducer
  );
  console.log(listStatsNumber);
  return (
    <>
      <ApplyPage>
        <ApplyPageHeader />
        <ApplyArticle>
          <ApplyPageNavbar />
          {listStatsNumber == 0 ? (
            <ResumeList />
          ) : listStatsNumber == 1 ? (
            <PortfolioList />
          ) : (
            <Typography variant='h1'>자기소개서</Typography>
          )}
        </ApplyArticle>
      </ApplyPage>
    </>
  );
}

export default Apply;
