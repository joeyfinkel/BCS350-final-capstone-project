import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RequiredAuth } from './components/RequiredAuth';
import { AuthProvider } from './context/authContext';
import { ErrorPage } from './error-page';
import './index.css';
import { Admin } from './routes/admin';
import { ViewData } from './routes/data';
import { Register } from './routes/register';
import { Root } from './routes/root';
import { Settings } from './routes/settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/login' element={<Root />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<ErrorPage />} />
      <Route element={<RequiredAuth />} errorElement={<ErrorPage />}>
        <Route path='/' element={<ViewData />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/admin' element={<Admin />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='w-100 h-100'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
