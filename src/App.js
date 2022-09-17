import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import {Manage} from './pages/resume/manage';
import {AddStepCategory} from './pages/resume/add-step';
import Login from './pages/members/Login';
import AgreeTerms from './pages/members/regist/AgreeTerms';
import InputForm from './pages/members/regist/InputForm';

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
            </Route>
            <Route path='member'>
              <Route path='login' element={<Login />} />
              <Route path='regist'>
                <Route path='agree-terms' element={<AgreeTerms />} />
                <Route path='input-form' element={<InputForm />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
