import {Route, Routes} from 'react-router-dom';
import MyJobSearch from '../pages/mypage/jobSearch/MyJobSearch';
import Error404 from './../pages/errors/Error404';
import AddJobSearch from '../pages/mypage/jobSearch/AddJobSearch';
import MyPageLayout from '../layouts/MyPageLayout';
import MyPageEntLayOut from './../layouts/MyPageEntLayOut';
export default function MyPageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}
      <Route path='jobsearch'>
        <Route index='/' element={<MyJobSearch />} />
        <Route path='write' element={<AddJobSearch />} />
      </Route>

      <Route index element={<MyPageLayout />} />
      <Route path='/ent' element={<MyPageEntLayOut />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
