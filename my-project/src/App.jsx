// src/App.js
import React from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder/FormBuilder';
import Cards from './components/Cards/Cards';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Navigation/Layout';
import SignButton from './components/Navigation/SignButton';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cards />} />
          <Route index element={<SignButton />} />
          <Route path="formBuilder" element={<FormBuilder />} />
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
