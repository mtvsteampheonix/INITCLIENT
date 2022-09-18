import {Route, Routes} from 'react-router-dom';
import JobSearch from '../pages/jobSearch/JobSearch';
import Error404 from './../pages/errors/Error404';
import Details from './../pages/jobSearch/Details';
export default function JobsearchRoute() {
  return (
    <Routes>
      <Route index element={<JobSearch />} />
      <Route path='details' element={<Details />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
