import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import ResumeRoute from './routes/ResumeRoute';
import MemberRoute from './routes/MemberRoute';
import JobsearchRoute from './routes/JobsearchRoute';
import ProductRoute from './routes/ProductRoute';
import ProtfolioRoute from './routes/ProtfolioRoute';
import RecruitRoute from './routes/RecruitRoute';
import NoticeRoute from './routes/NoticeRoute';
import MypageRoute from './routes/MypageRoute';
import CompanyRoute from './routes/CompanyRoute';
import FaqRoute from './routes/FaqRoute';
import PolicyRoute from './routes/PolicyRoute';
import Error404 from './pages/errors/Error404';
import ScrollToTop from './Scroll-to-top';
import AdminRoute from './routes/AdminRoute';
import AdminHeader from './components/commons/AdminHeader';
import CompanyHeader from './components/commons/CompanyHeader';
import ScoutRoute from './routes/ScoutRoute';
import PersonalHeader from './components/commons/PersonalHeader';
import NonMemberHeader from './components/commons/NonMemberHeader';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />

            <Route path='resume/*' element={<ResumeRoute />} />

            <Route path='member/*' element={<MemberRoute />} />

            <Route path='jobsearch/*' element={<JobsearchRoute />} />

            <Route path='product/*' element={<ProductRoute />} />

            <Route path='protfolio/*' element={<ProtfolioRoute />} />

            <Route path='recruit/*' element={<RecruitRoute />} />

            <Route path='notice/*' element={<NoticeRoute />} />

            <Route path='mypage/*' element={<MypageRoute />} />

            <Route path='company/*' element={<CompanyRoute />} />

            <Route path='faq/*' element={<FaqRoute />} />

            <Route path='policy/*' element={<PolicyRoute />} />

            <Route path='scout/*' element={<ScoutRoute />} />

            {/*2022.09.24 관리자페이지어떻게 할지 몰라서 우선 AdminRoute만들어서 작업했습니다. wcs님*/}
            <Route path='admin/*' element={<AdminRoute />} />

            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
