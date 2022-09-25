// 리액트 접근 제한 기능을 추가한 App.js

import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import PrivateRoute from './authentic/components/PrivateRoute';
import PublicRoute from './authentic/components/PublicRoute';
import Error404 from './pages/errors/Error404';
import Main from './pages/Main';
import InputForm from './pages/members/regist/InputForm';
import ScrollToTop from './Scroll-to-top';
import MypageLayout from './layouts/MypageLayout';
import Login from './pages/members/Login';

export default function AppV2() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Switch>
            <PublicRoute restricted={false} component={Main} path='/' exact />
            <PublicRoute
              restricted={true}
              component={InputForm}
              path='/register'
              exact
            />
            <PublicRoute
              restricted={true}
              component={Login}
              path='/login'
              exact
            />
            <PrivateRoute component={MypageLayout} path='/mypage' exact />
            <Route component={Error404} />
          </Switch>
        </Routes>
      </BrowserRouter>
    </>
  );
}
