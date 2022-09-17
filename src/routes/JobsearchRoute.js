import {Route, Routes} from 'react-router-dom';
import JobSearch from '../pages/jobSearch/JobSearch';
import Error404 from './../pages/errors/Error404';
export default function JobsearchRoute() {
  return (
    <Routes>
      <Route index element={<JobSearch />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
