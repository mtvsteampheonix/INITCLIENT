import {Route, Routes} from 'react-router-dom';
import Error404 from '../pages/errors/Error404';
import {AddStepCategory} from '../pages/resume/Add-step';
import AddStepDetail from '../pages/resume/AddStepDetail';
import {Manage} from '../pages/resume/Manage';

export default function ResumeRoute() {
  return (
    <Routes>
      <Route index element={<Manage />} />
      <Route path='add/step1' element={<AddStepCategory />} />
      <Route path='add/step2' element={<AddStepDetail />} />

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
