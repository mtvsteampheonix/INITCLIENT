import {Route, Routes} from 'react-router-dom';
import FindInfo from '../layouts/Find-info';
import FindId from '../pages/members/find-info/Find-id';
import Login from '../pages/members/Login';
import AgreeTerms from '../pages/members/regist/AgreeTerms';
import InputForm from '../pages/members/regist/InputForm';
import RegistSuccess from '../pages/members/regist/RegistSuccess';
import Error404 from './../pages/errors/Error404';
import InputFormEnt from './../pages/members/regist/InputFormEnt';
import FindPassword from './../pages/members/find-info/Find-password';
export default function MemberRoute() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='find-info' element={<FindInfo />}>
        <Route path='id' element={<FindId />} />
        <Route path='id' element={<FindPassword />} />
      </Route>
      <Route path='regist'>
        <Route path='agree-terms' element={<AgreeTerms />} />
        <Route path='input' element={<InputForm />} />
        <Route path='input-ent' element={<InputFormEnt />} />
        <Route path='success' element={<RegistSuccess />} />
      </Route>

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
