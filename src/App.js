import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import {Manage} from './pages/resume/Manage';
import {AddStepCategory} from './pages/resume/add-step';
import AddStepDetail from './pages/resume/AddStepDetailBasic';
import Login from './pages/members/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='resume'>
              <Route index element={<Manage />} />
              <Route path='add/step1' element={<AddStepCategory />} />
              <Route path='add/step2-basic' element={<AddStepDetail />} />
            </Route>
            <Route path='member'>
              <Route path='login' element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
