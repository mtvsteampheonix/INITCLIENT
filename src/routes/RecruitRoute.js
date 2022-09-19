import {Route, Routes} from 'react-router-dom';
import Error404 from './../pages/errors/Error404';
import Apply from './../pages/recruit/Apply';
export default function RecruitRoute() {
  return (
    <Routes>
      <Route path='apply' element={<Apply />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
