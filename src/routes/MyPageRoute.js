import {Route, Routes} from 'react-router-dom';

import Error404 from './../pages/errors/Error404';
import MyPageEntLayOut from './../layouts/MyPageEntLayOut';
import MyPageIndex from './../pages/mypage/member/MypageIndex';
import MyProfile from '../pages/mypage/member/MyProfile';
import ApplyHistory from '../pages/mypage/member/ApplyHistory';
import InterviewHistory from '../pages/mypage/member/InterviewHistory';
import EditMemberInfo from '../pages/mypage/member/EditMemberInfo';
import Withdraw from '../pages/members/Withdraw';
import MypageLayout from '../layouts/MypageLayout';
export default function MyPageRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}

      {/* <Route index element={<MyPageLayout />} /> */}
      <Route path='ent' element={<MyPageEntLayOut />} />
      <Route path='' element={<MypageLayout />}>
        <Route index element={<MyPageIndex />} />
        <Route path='edit-profile' element={<EditMemberInfo />} />
        <Route path='my-profile' element={<MyProfile />} />
        <Route path='apply-list' element={<ApplyHistory />} />
        <Route path='suggestion-list' element={<InterviewHistory />} />
        <Route path='withdraw' element={<Withdraw />} />
      </Route>
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
