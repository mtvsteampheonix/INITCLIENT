import {Route, Routes} from 'react-router-dom';
import Error404 from './../pages/errors/Error404';
export default function MyPageRoute() {
  return (
    <Routes>
      <Route></Route>

      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
