import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import NonMemberHeader from '../components/commons/NonMemberHeader';
import CommonFooter from '../components/commons/footer/CommonFooter';
import {useDispatch, useSelector} from 'react-redux';
import PersonalHeader from '../components/commons/PersonalHeader';
import CompanyHeader from '../components/commons/CompanyHeader';
import AdminHeader from '../components/commons/AdminHeader';
import CompanyFooter from '../components/commons/footer/CompanyFooter';

// 0: 비회원, 1: 개인회원, 2:기업회원, 3:어드민
const headerList = [
  <NonMemberHeader />,
  <PersonalHeader />,
  <CompanyHeader />,
  <AdminHeader />
];

const footerList = [
  <CommonFooter />,
  <CommonFooter />,
  <CompanyFooter />,
  <CommonFooter />
];

function TempLayout() {
  const token = useSelector((state) => state.tokenTempReducer);
  console.log(token);
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        {headerList[token.kind]}
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <Outlet />
        </Container>
        {footerList[token.kind]}
      </Box>
    </>
  );
}

export default TempLayout;
