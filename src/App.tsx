import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Root } from './routes/root';

export const App = () => {
  return (
    <div className='w-100 h-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Root />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
