import {Outlet} from 'react-router-dom';
import {Box, Container} from '@mui/material';
import NonMemberHeader from '../components/commons/NonMemberHeader';
import CommonFooter from '../components/commons/footer/CommonFooter';

function Layout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <NonMemberHeader />
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <Outlet />
        </Container>
        <CommonFooter />
      </Box>
    </>
  );
}

export default Layout;
