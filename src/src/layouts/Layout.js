import {Outlet} from 'react-router-dom';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import {Container} from '@mui/material';

function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth='lg' disableGutters sx={{minWidth: '400px'}}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
