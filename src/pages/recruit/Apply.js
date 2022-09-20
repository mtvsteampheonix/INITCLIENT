import ApplyPageHeader from '../../components/applyPage/ApplyPageHeader';
import styled from 'styled-components';
import ApplyPageNavbar from '../../components/applyPage/ApplyPageNavbar';
import ResumeList from './ResumeList';
import {useSelector} from 'react-redux';
import applyPageListStatsReducer from '../../modules/applyPageModule';
import {Typography} from '@mui/material';
import PortfolioList from './PortfolioList';
import SelfIntroductionList from './SelfIntroductionList';
const ApplyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ApplyArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
      <ApplyPageHeader />
      <ApplyArticle>
        <ApplyPageNavbar />
        {listStatsNumber == 0 ? (
          <ResumeList />
        ) : listStatsNumber == 1 ? (
          <PortfolioList />
        ) : (
          <SelfIntroductionList />
        )}
      </ApplyArticle>
    </>
  );
}

export default Apply;
