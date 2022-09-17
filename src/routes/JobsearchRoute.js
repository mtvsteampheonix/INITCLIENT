import {Route, Routes} from 'react-router-dom';
import JobSearch from '../pages/jobSearch/JobSearch';
export default function JobsearchRoute() {
  return (
    <Routes>
      <Route index element={<JobSearch />} />
    </Routes>
  );
}
