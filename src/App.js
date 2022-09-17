import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import ResumeRoute from './routes/ResumeRoute';
import MemberRoute from './routes/MemberRoute';
import JobsearchRoute from './routes/JobsearchRoute';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />

            <Route path='resume/*' element={<ResumeRoute />} />

            <Route path='member/*' element={<MemberRoute />} />

            <Route path='jobsearch/*' element={<JobsearchRoute />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
