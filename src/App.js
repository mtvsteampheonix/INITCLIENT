import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import JobSearch from './pages/jobSearch/JobSearch';
import Member from './routes/member/Member';
import Resume from './routes/resume/Resume';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />

            <Route path='resume/*' element={<Resume />} />

            <Route path='member/*' element={<Member />} />

            <Route path='jobsearch'>
              <Route index element={<JobSearch />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
