import {Route, Routes} from 'react-router-dom';
import ApplyList from '../pages/mypage/applyList/ApplyList';
import Error404 from './../pages/errors/Error404';
import MyPageLayout from '../layouts/MyPageLayout';
import MyPageEntLayOut from './../layouts/MyPageEntLayOut';
export default function MyPageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}

      <Route index element={<MyPageLayout />} />
      <Route path='/ent' element={<MyPageEntLayOut />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
