import {Route, Routes} from 'react-router-dom';
import {AddStepCategory} from '../../pages/resume/add-step';
import {Manage} from '../../pages/resume/manage';
export default function Resume() {
  return (
    <Routes>
      <Route index element={<Manage />} />
      <Route path='add/step1' element={<AddStepCategory />} />
    </Routes>
  );
}
