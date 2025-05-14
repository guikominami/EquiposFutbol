import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/teams';

import PrivateRoute from './components/Auth/PrivateRoute';

import Header from './components/Header';
import Events from './pages/Events';
import NewUser from './pages/NewUser';
import Teams from './pages/Teams';
import Login from './pages/Login';

import { getToken } from './components/Auth/Token';

function App() {
  const token = getToken();
  console.log(token);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path='/events' element={<Events />} />
              <Route path='/user' element={<NewUser />} />
              <Route path='/teams' element={<Teams />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
