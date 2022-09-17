import {Outlet} from 'react-router-dom';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
