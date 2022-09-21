import {Route, Routes} from 'react-router-dom';
import Error404 from '../pages/errors/Error404';

import Company from '../pages/company/Company';
import DetailCompany from '../pages/company/DetailCompany';

import EdlitListCompanyInfo from '../pages/company/EdlitListCompanyInfo';

export default function CompanyRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}
      <Route index element={<Company />} />
      <Route path='detail' element={<DetailCompany />} />

      <Route path='editlist' element={<EdlitListCompanyInfo />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
