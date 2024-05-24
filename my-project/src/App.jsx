import React from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import Cards from './components/Cards/Cards';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Cards />} />
        <Route path='/formBuilder' element={<FormBuilder />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;