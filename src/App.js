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
import MyPageRoute from './routes/MyPageRoute';
import CompanyRoute from './routes/CompanyRoute';
import FaqRoute from './routes/FaqRoute';
import PolicyRoute from './routes/PolicyRoute';
import Error404 from './pages/errors/Error404';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />

            <Route
              path='resume/*'
              element={<ResumeRoute />}
              errorElement={<Error404 />}
            />

            <Route path='member/*' element={<MemberRoute />} />

            <Route path='jobsearch/*' element={<JobsearchRoute />} />

            <Route path='product/*' element={<ProductRoute />} />

            <Route path='protfolio/*' element={<ProtfolioRoute />} />

            <Route path='recruit/*' element={<RecruitRoute />} />

            <Route path='notice/*' element={<NoticeRoute />} />

            <Route path='mypage/*' element={<MyPageRoute />} />

            <Route path='company/*' element={<CompanyRoute />} />

            <Route path='faq/*' element={<FaqRoute />} />

            <Route path='policy/*' element={<PolicyRoute />} />

            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
