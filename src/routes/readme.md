app.js에 작성하던 Route 컴포넌트를 분리시킨 디렉토리로 자신의 url의 1레벨에 해당하는 js파일에 적어주시면 됩니다.

만약 routes에 url이 없다면 관리자(손창우)에게 문의해주시기 바랍니다.

또한 새로운 페이지를 추가하실때

<Route path='\*' element={<Error404 />} />

코드 위에 작성해주시기 바랍니다.

예시)

import {Route, Routes} from 'react-router-dom';
import Login from '../pages/members/Login';
import AgreeTerms from '../pages/members/regist/AgreeTerms';
import InputForm from '../pages/members/regist/InputForm';
import RegistSuccess from '../pages/members/regist/RegistSuccess';
import Error404 from './../pages/errors/Error404';
export default function MemberRoute() {
return (
<Routes>
<Route path='login' element={<Login />} />
<Route path='regist'>
<Route path='agree-terms' element={<AgreeTerms />} />
<Route path='input' element={<InputForm />} />
<Route path='success' element={<RegistSuccess />} />
</Route>

      <Route path='*' element={<Error404 />} />
    </Routes>

);
}
