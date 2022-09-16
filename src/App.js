import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Apply from './pages/recurit/Apply';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='recurit/apply' element={<Apply />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
