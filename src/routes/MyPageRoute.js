import {Route, Routes} from 'react-router-dom';
import MyJobSearch from '../pages/mypage/jobSearch/MyJobSearch';
import Error404 from './../pages/errors/Error404';
import MyPageLayout from '../layouts/MyPageLayout';
export default function MyPageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}
      <Route path='jobsearch' element={<MyJobSearch />} />
      

      <Route index element={<MyPageLayout />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
