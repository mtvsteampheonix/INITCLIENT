import {Route, Routes} from 'react-router-dom';
import Error404 from '../pages/errors/Error404';
import {AddStepCategory} from '../pages/resume/add-step';
import {Manage} from '../pages/resume/manage';

export default function ResumeRoute() {
  return (
    <Routes>
      <Route index element={<Manage />} />
      <Route path='add/step1' element={<AddStepCategory />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
