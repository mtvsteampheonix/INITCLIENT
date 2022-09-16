import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Login from './pages/members/Login';
import AgreeTerms from './pages/members/regist/AgreeTerms';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='member'>
              <Route path='login' element={<Login />} />
              <Route path='regist'>
                <Route path='agree-terms' element={<AgreeTerms />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
