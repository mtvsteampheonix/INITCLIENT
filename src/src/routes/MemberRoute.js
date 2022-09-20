import {Route, Routes} from 'react-router-dom';
import Login from '../pages/members/Login';
import AgreeTerms from '../pages/members/regist/AgreeTerms';
import InputForm from '../pages/members/regist/InputForm';
import RegistSuccess from '../pages/members/regist/RegistSuccess';
import Error404 from './../pages/errors/Error404';
import InputFormEnt from './../pages/members/regist/InputFormEnt';
export default function MemberRoute() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
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
