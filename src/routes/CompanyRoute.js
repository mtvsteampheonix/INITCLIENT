import {Route, Routes} from 'react-router-dom';
import Error404 from '../pages/errors/Error404';
import Company from '../pages/company/Company';

export default function CompanyRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}
      <Route index element={<Company />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
