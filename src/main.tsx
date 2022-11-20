import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Root } from './routes/root';
import { ViewAll } from './routes/view-all';
import { Register } from './routes/register';
import { Settings } from './routes/settings';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Admin } from './routes/admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'view-all',
    element: <ViewAll />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='w-100 h-100'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
