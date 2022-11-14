import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { Root } from './routes/root';
import { Dashboard } from './routes/dashboard';
import { Register } from './routes/register';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='w-100 h-100'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
