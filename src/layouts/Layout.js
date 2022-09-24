import {Outlet} from 'react-router-dom';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import {Box, Container} from '@mui/material';
import {Margin} from '@mui/icons-material';

function Layout() {
  return (
    <>
      <Box display='flex' minHeight='100vh' flexDirection='column'>
        <Header />
        <Container
          maxWidth='lg'
          disableGutters
          sx={{minWidth: '400px', flex: 1}}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
