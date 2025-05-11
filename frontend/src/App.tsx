import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/teams';

import Header from './components/Header';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Teams from './pages/Teams';
import Login from './pages/Login';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<NewUser />} />
            <Route path='/teams' element={<Teams />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
