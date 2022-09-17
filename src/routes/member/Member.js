import {Route, Routes} from 'react-router-dom';
import Login from './../../pages/members/Login';
import AgreeTerms from './../../pages/members/regist/AgreeTerms';
import InputForm from './../../pages/members/regist/InputForm';
import RegistSuccess from './../../pages/members/regist/RegistSuccess';
function Member() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='regist'>
        <Route path='agree-terms' element={<AgreeTerms />} />
        <Route path='input' element={<InputForm />} />
        <Route path='success' element={<RegistSuccess />} />
      </Route>
    </Routes>
  );
}

export default Member;
