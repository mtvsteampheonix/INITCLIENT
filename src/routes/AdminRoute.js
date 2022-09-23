import {Route, Routes} from 'react-router-dom';
import AdminJobSearch from '../pages/admin/jobsearch/AdminJobSearch';
import AdminJobSearchDetails from '../pages/admin/jobsearch/AdminJobSearchDetails';
import Error404 from './../pages/errors/Error404';
export default function FaqRoute() {
  return (
    <Routes>
      {/* //이곳에 페이지 추가해주세요  */}
      <Route index element={<AdminJobSearch />} />
      <Route path='jobsearch'  >
        <Route index element={<AdminJobSearch />}/>
        <Route path='details/:id' element={<AdminJobSearchDetails/>}/>
      </Route>

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
