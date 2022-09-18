import {Route, Routes} from 'react-router-dom';
import ApplyList from '../pages/mypage/applyList/ApplyList';
import Error404 from './../pages/errors/Error404';
export default function MyPageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}

      <Route path='applylist' element={<ApplyList />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
